import React, { useState } from 'react';
import * as S from './Contact.Elements';

/* Axios and node server file temporarily disabled. Email via php and hosting provider */

//import Axios from 'axios';
//import { API_URL } from '../../../server';

const Contact = () => {
	const [send, setSend] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

/* Axios and node server file temporarily disabled. Email via php and hosting provider */

	// const sendMessage = async (e) => {
	// 	e.preventDefault();
	// 	const emailMessage = {
	// 		name: name,
	// 		email: email,
	// 		message: message,
	// 	};
	// 	try {
	// 		const res = await Axios.post(`${API_URL}/email`, { emailMessage });
	// 		res.data.message === true ? setSend(true) : setSend(false);
	// 		setName('');
	// 		setEmail('');
	// 		setMessage('');
	// 	} catch (err) {
	// 		setSend(false);
	// 	}
	// };

	const sendMessage = () => {
		setSend(true);
	}

	return (
		<>
			<S.Container id='contact'>
				<S.Title>let's talk</S.Title>
				<S.FormElement action='mail.php' method='POST' onSubmit={() => sendMessage()}>
					{send && (
						<S.MessageStatus send={send}>" message send " </S.MessageStatus>
					)}
					{send === false && (
						<S.MessageStatus send={send}>
							" error message not send "
						</S.MessageStatus>
					)}
					<S.Row>
						<S.LabelElement>name:</S.LabelElement>
						<S.InputElement
							type='text'
							placeholder='John Doe'
							value={name}
							name='name'
							required
							onChange={(event) => setName(event.target.value)}
						/>
					</S.Row>
					<S.Row>
						<S.LabelElement>email:</S.LabelElement>
						<S.InputElement
							type='text'
							placeholder='john.doe@gmail.com'
							value={email}
							name='email'
							required
							onChange={(event) => setEmail(event.target.value)}
						/>
					</S.Row>
					<S.Row>
						<S.LabelElement>message:</S.LabelElement>
						<S.TextareaElement
							type='text'
							value={message}
							name='message'
							required
							onChange={(event) => setMessage(event.target.value)}
						/>
					</S.Row>
					<S.Row>
						<S.SubmitBtn type='submit'>send</S.SubmitBtn>
					</S.Row>
				</S.FormElement>
			</S.Container>
		</>
	);
};

export default Contact;
