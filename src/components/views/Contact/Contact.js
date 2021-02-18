import React, { useState } from 'react';
import * as S from './Contact.Elements';

const Contact = () => {
	const [send, setSend] = useState(false);
	const [message, SetMessage] = useState(false);
	//const [correct, setCorrect] = useState(false);
	const sendMessage = (e) => {
		e.preventDefault();
		setSend(!send);
		SetMessage(true);
	};

	return (
		<>
			<S.Container id='contact'>
				<S.FormElement>
					<S.MessageSucces message={message}>" message send "</S.MessageSucces>
					<S.Row>
						<S.LabelElement>name:</S.LabelElement>
						<S.InputElement type='text' placeholder='John Doe' />
					</S.Row>
					<S.Row>
						<S.LabelElement>email:</S.LabelElement>
						<S.InputElement type='text' placeholder='john.doe@gmail.com' />
					</S.Row>
					<S.Row>
						<S.LabelElement>message:</S.LabelElement>
						<S.TextareaElement type='text' />
					</S.Row>
					<S.Row>
						<S.SubmitBtn onClick={(e) => sendMessage(e)}>send</S.SubmitBtn>
					</S.Row>
				</S.FormElement>
			</S.Container>
		</>
	);
};

export default Contact;
