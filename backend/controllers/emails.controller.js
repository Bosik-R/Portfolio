const Email = require('../models/email.model');

exports.post = async (req, res) => {
	const { name, email, message } = req.body.emailMessage;

	try {
		const newEmail = new Email({
			name: name,
			email: email,
			message: message,
		});

		await newEmail.save();
		res.json({message: true});
	}

	catch(err) {
		res.status(500).json(err);
	}
};
