import React, {useState} from 'react'
import { 
  Container,
  MessageSucces,
  FormElement,
  Row,
  LabelElement,
  InputElement,
  TextareaElement,
  SubmitBtn,
} from './Contact.Elements';

const Contact = () => {
  const [send, setSend] = useState(false);
  const [message, SetMessage] = useState(false);
  //const [correct, setCorrect] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    setSend(!send)
    SetMessage(true);
  }

  return (
    <>
      <Container id='contact'>
        <FormElement>
        <MessageSucces message={message}>" message send "</MessageSucces>
          <Row>
            <LabelElement>name:</LabelElement>
            <InputElement type='text' placeholder='John Doe'/>
          </Row>
          <Row>
            <LabelElement>email:</LabelElement>
            <InputElement type='text' placeholder='john.doe@gmail.com' />
          </Row>
          <Row>
            <LabelElement>message:</LabelElement>
            <TextareaElement type='text'/>
          </Row>
          <Row>
            <SubmitBtn onClick={(e) => sendMessage(e)}>send</SubmitBtn>
          </Row>
        </FormElement>
      </Container>
    </>
  )
}

export default Contact;
