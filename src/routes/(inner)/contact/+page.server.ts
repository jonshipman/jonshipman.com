import { EMAIL_PASS, EMAIL_USER } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

const limit = new Map<string, string>();

export const actions = {
	async default({ url, request, getClientAddress }) {
		const ip = getClientAddress();
		if (limit.has(ip))
			return fail(400, { error: 'You have already sent me something! I loved it!' });

		const data = await request.formData();
		const email = data.get('email');

		if (!email) return fail(400, { error: 'Missing a required field' });

		const honeypot = data.get('phone');
		if (honeypot) return { success: 'successful post action' }; // Mask actual errors.

		const message = data.get('message') + `\n\nIP: ${ip}`;
		const subject = data.get('subject');

		const transporter = nodemailer.createTransport({
			host: 'smtp.mailgun.org',
			port: 587,
			secure: false,
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS
			}
		});

		try {
			await transporter.sendMail({
				from: EMAIL_USER,
				replyTo: email + '',
				to: 'jon@jonshipman.com',
				subject: 'JonShipman.com: ' + subject,
				text: message,
				html: '<p>' + message.split('\n').join('<br/>') + '</p>'
			});
		} catch (_) {
			return fail(400, { error: 'Transport failed. Just email me @ jon@jonshipman.com, ok?' });
		}

		limit.set(ip, email + '');

		return { success: 'Successful Post Action' };
	}
};
