const socket = io();

const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');
const $sidebar = document.querySelector('#sidebar');

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML;
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML;

// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true });

const autoScroll = () => {
	//New message element
	const $newMessage = $messages.lastElementChild;
	//Height of the new message
	const newMessageStyles = getComputedStyle($newMessage);
	const newMessageMargin = parseInt(newMessageStyles.marginBottom);
	const newMessageHeight = $newMessage.offsetHeight + newMessageMargin;
	//Visible height
	const VisibleHeight = $messages.offsetHeight;
	//Height of messages container
	const containerHeight = $messages.scrollHeight;
	//How far have I scrolled up?
	const scrollOffset = $messages.scrollTop + VisibleHeight;
	if (containerHeight - newMessageHeight <= scrollOffset) {
		$messages.scrollTop = $messages.scrollHeight;
	}
};

socket.on('message', (msg) => {
	console.log(msg);
	// debugger
	const html = Mustache.render(messageTemplate, {
		username: msg.username,
		message: msg.text,
		createdAt: moment(msg.createdAt).format('h:mm a')
	});
	$messages.insertAdjacentHTML('beforeend', html);
	autoScroll();
});

socket.on('locationMessage', (msg) => {
	console.log(msg);
	const html = Mustache.render(locationMessageTemplate, {
		username: msg.username,
		url: msg.url,
		createdAt: moment(msg.createdAt).format('h:mm a')
	});
	$messages.insertAdjacentHTML('beforeend', html);
	autoScroll();
});

socket.on('roomData', ({ room, users }) => {
	console.log(room);
	console.log(users);
	const html = Mustache.render(sidebarTemplate, {
		room,
		users
	});
	$sidebar.innerHTML = html;
});

$messageForm.addEventListener('submit', (event) => {
	event.preventDefault(); //防止页面刷新
	// debugger;
	$messageFormButton.setAttribute('disabled', 'disabled');
	const message = event.target.elements.message.value;
	socket.emit('sendMessage', message, (error) => {
		$messageFormButton.removeAttribute('disabled');
		$messageFormInput.value = '';
		$messageFormInput.focus();
		if (error) {
			return console.log(error);
		}
		console.log('Message delivered!');
	});
});

$sendLocationButton.addEventListener('click', () => {
	// debugger;
	if (!navigator.geolocation) {
		return alert('Geolocation is not supported by your browser.');
	}
	$sendLocationButton.setAttribute('disabled', 'disabled');

	//No response if do not use proxy
	navigator.geolocation.getCurrentPosition((position) => {
		socket.emit(
			'sendLocation',
			{ latitude: position.coords.latitude, longitude: position.coords.longitude },
			() => {
				console.log('Location shared!');
				$sendLocationButton.removeAttribute('disabled');
			}
		);
	});
});

socket.emit('join', { username, room }, (error) => {
	if (error) {
		location.href = '/';
		alert(error);
	}
});
