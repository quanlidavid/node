const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const DOMAIN = 'sandboxa15bc010b8f74ac6ab0ce54c6d84c714.mailgun.org';
const mg = mailgun.client({
	username: 'api',
	key: process.env.MAILGUN_API_KEY
});
const datetime = new Date();

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.

const sendWelcomeEmail = (email, name) => {
	mg.messages
		.create(DOMAIN, {
			from: 'Mailgun Sandbox <postmaster@sandboxa15bc010b8f74ac6ab0ce54c6d84c714.mailgun.org>',
			to: email,
			subject: 'Thanks for joining in! ' + datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString(),
			text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
			html: '<h1>Welcome to the app, ' + name + '. Let me know how you get along with the app.</h1>'
		})
		.then((msg) => console.log(msg)) // logs response data
		.catch((err) => console.log(err)); // logs any error
};

const sendCancelEmail = (email, name) => {
	mg.messages
		.create(DOMAIN, {
			from: 'Mailgun Sandbox <postmaster@sandboxa15bc010b8f74ac6ab0ce54c6d84c714.mailgun.org>',
			to: email,
			subject: 'Sorry to see you go! ' + datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString(),
			text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
			html: '<h1>Goodbye, , ' + name + '. I hope to see you back sometime soon.</h1>'
		})
		.then((msg) => console.log(msg)) // logs response data
		.catch((err) => console.log(err)); // logs any error
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail
};
