import React, { useState } from 'react';
import * as S from './Contact.Elements';
import Axios from 'axios';
import { API_URL } from '../../../server';

const Contact = () => {
	const [send, setSend] = useState(false);
	const [unSend, setUnSend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

	console.log(name);
	console.log(email);
	console.log(message);

	const sendMessage = async (e) => {
		e.preventDefault();
		const emailMessage = {
			name: name,
			email: email,
			message: message,
		}
		try {
			const res = await Axios.post(`${API_URL}/email`, {emailMessage});
			res.data.message === true ? setSend(true) : setUnSend(true);
			setName('');
			setEmail('');
			setMessage('');

		}
		catch(err) {
			setUnSend(true);
			console.log(err);
		}
	};

	return (
		<>
			<S.Container id='contact'>
				<S.FormElement onSubmit={(e) => sendMessage(e)} >
					<S.MessageSucces send={send}>" message send "</S.MessageSucces>
					<S.MessageError unSend={unSend}>" error message not send "</S.MessageError>
					<S.Row>
						<S.LabelElement>name:</S.LabelElement>
						<S.InputElement type='text' placeholder='John Doe' value={name} required onChange={(event) => setName(event.target.value)} />
					</S.Row>
					<S.Row>
						<S.LabelElement>email:</S.LabelElement>
						<S.InputElement type='text' placeholder='john.doe@gmail.com' value={email} required onChange={(event) => setEmail(event.target.value)} />
					</S.Row>
					<S.Row>
						<S.LabelElement>message:</S.LabelElement>
						<S.TextareaElement type='text' value={message} required onChange={(event) => setMessage(event.target.value)} />
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
