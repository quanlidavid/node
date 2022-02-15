const socket = io();

const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;

socket.on('message', (msg) => {
	console.log(msg);
	// debugger
	const html = Mustache.render(messageTemplate, { message: msg });
	$messages.insertAdjacentHTML('beforeend', html);
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
