import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className="container">
      <div className="title">Contact</div>
      <div className="about">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <p></p>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <p></p>
            <label htmlFor="email">Email address:</label>
            <p></p>
            {'\n'}
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <p></p>
            <label htmlFor="message">Message:</label>
            <p></p>
            {'\n'}
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            {'\n'}
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;