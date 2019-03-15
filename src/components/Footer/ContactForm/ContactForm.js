import React from 'react';
import PropsTypes from 'prop-types';
import ReactGa from 'react-ga';

import FormField from './FormField/FormField';

import styles from './ContactForm.module.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      name: '',
      mail: '',
      company: '',
      motive: '',
      message: '',
      sendingMail: false,
      sendingMailResponse: ''
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  handleContactSend = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      sendingMail: true,
      sendingMailResponse: ''
    }), () => {
      ReactGa.event({
        category: 'Contact',
        action: 'Sent a message through the contact form'
      });
      
      const { sendingMail, sendingMailResponse, ...contacyBody} = this.state;
      fetch('https://ur-portfolio-api.herokuapp.com/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contacyBody)
      })
        .then(response => {
          const selectedLanguage = this.props;
          let errorMessage = '';

          if (response.ok) {
            errorMessage = selectedLanguage === 'EN' ? 'Message sent successfully, thank you very much!' : 'Mensaje enviado correctamente, muchas gracias!'
          } else {
            errorMessage = selectedLanguage === 'EN' ? 'Error sending the message, please try again' : 'Error al enviar el mensaje, por favor intentá de nuevo';
          }

          this.setState(prevState => ({
            ...prevState,
            sendingMail: false,
            sendingMailResponse: errorMessage
          }))
        })
        .catch(err => {
          console.log(err);
          const selectedLanguage = this.props;
          this.setState(prevState => ({
            ...prevState,
            sendingMail: false,
            sendingMailResponse: selectedLanguage === 'EN' ? 'Error sending the message, please try again' : 'Error al enviar el mensaje, por favor intentá de nuevo'
          }))
        })
    })
  }

  render() {
    const { selectedLanguage } = this.props;
    const { name, mail, company, motive, message, sendingMail, sendingMailResponse } = this.state;

    return (
      <div id='contact' className={styles.formContactContainer}>
        {
          selectedLanguage === 'EN' ?
          <h4>If there is anything on the site that is of interest to you or you have any questions at all, please do not hesitate to reach out!</h4> :
          <h4>Si viste algo que fue de tu interés o tenés alguna consulta, por favor no dudes en contactarme!</h4>
        }
        <form onSubmit={this.handleContactSend} className={styles.form}>
          <FormField name='name' inputValue={name} label={selectedLanguage === 'EN' ? 'Name' : 'Nombre'} onInputChange={this.handleInputChange} />
          <FormField name='mail' inputValue={mail} label='E-Mail' onInputChange={this.handleInputChange} isMail />
          <FormField name='company' inputValue={company} label={selectedLanguage === 'EN' ? 'Company (optional)' : 'Compañía (opcional)'} onInputChange={this.handleInputChange} isOptional />
          <FormField name='motive' inputValue={motive} label={selectedLanguage === 'EN' ? 'Motive' : 'Motivo'} onInputChange={this.handleInputChange} />
          <FormField name='message' inputValue={message} label={selectedLanguage === 'EN' ? 'Message' : 'Mensaje'} onInputChange={this.handleInputChange} isMultiLine />
          <button disabled={sendingMail}>{selectedLanguage === 'EN' ? 'SUBMIT' : 'ENVIAR'}</button>
        </form>
        <p style={{display: `${sendingMailResponse.trim() !== '' ? 'block' : 'none'}`}}>{sendingMailResponse}</p>
      </div>
    );
  }
}

ContactForm.propsTypes = {
  selectedLanguage: PropsTypes.string.isRequired
}

export default ContactForm;