import { useState, useRef } from 'react';
import useEmail from '../../hooks/useEmail';
import classes from './EmailForm.module.css';

import LoadingSpinner from '../interface/UI/LoadingSpinner';
import Error from '../interface/UI/Error';
import EmailSucceed from './EmailSucceed';
import Button from '../interface/UI/Button';

const EmailForm = ({ data }) => {
  const { button, placeholders, invalid, labels } = data;
  const form = useRef();
  const { emailLoading, emailError, emailSucceed, sendEmail } = useEmail();
  const [enteredValues, setEnteredValues] = useState({
    from: { value: '', isValid: true },
    subject: { value: '', isValid: true },
    text: { value: '', isValid: true }
  });

  const fromInputHandler = (event) => {
    setEnteredValues((prevState) => ({
      ...prevState,
      from: { value: event.target.value, isValid: true }
    }));
  };

  const subjectInputHandler = (event) => {
    setEnteredValues((prevState) => ({
      ...prevState,
      subject: { value: event.target.value, isValid: true }
    }));
  };

  const textInputHandler = (event) => {
    setEnteredValues((prevState) => ({
      ...prevState,
      text: { value: event.target.value, isValid: true }
    }));
  };

  const emailSubmitHandler = async (event) => {
    event.preventDefault();

    const fromIsValid =
      enteredValues.from.value.includes('@') &&
      enteredValues.from.value.includes('.') &&
      enteredValues.from.value.length > 5;
    const subjectIsValid = enteredValues.subject.value.trim().length > 1;
    const textIsValid = enteredValues.text.value.trim().length > 1;

    if (!fromIsValid)
      setEnteredValues((prevState) => ({
        ...prevState,
        from: { ...prevState.from, isValid: false }
      }));
    if (!subjectIsValid)
      setEnteredValues((prevState) => ({
        ...prevState,
        subject: { ...prevState.subject, isValid: false }
      }));
    if (!textIsValid)
      setEnteredValues((prevState) => ({
        ...prevState,
        text: { ...prevState.text, isValid: false }
      }));

    const emailIsValid = fromIsValid && subjectIsValid && textIsValid;
    if (emailIsValid) {
      sendEmail(form);
    }
  };

  if (emailError) return <Error email error={emailError} />;
  if (emailLoading) return <LoadingSpinner email />;
  if (emailSucceed) return <EmailSucceed />;

  return (
    <main className={classes.formbox}>
      <form className={classes.form} onSubmit={emailSubmitHandler} ref={form}>
        <div className={classes.inputbox}>
          <label htmlFor='email'>{labels.from}</label>
          <input
            className={!enteredValues.from.isValid ? classes.inputInvalid : ''}
            type='email'
            name='email'
            id='email'
            maxLength='30'
            placeholder={placeholders.from}
            onChange={fromInputHandler}
            onKeyDown={(event) => {
              if (event.key.toLowerCase() === 'enter') {
                event.preventDefault();
                document.getElementById('subject').focus();
              }
            }}
            enterKeyHint='next'
            value={enteredValues.from.value}
            formNoValidate
          />
          <span>{invalid.from}</span>
        </div>
        <div className={classes.inputbox}>
          <label htmlFor='subject'>{labels.subject}</label>
          <input
            className={
              !enteredValues.subject.isValid ? classes.inputInvalid : ''
            }
            type='text'
            name='subject'
            id='subject'
            maxLength='50'
            placeholder={placeholders.subject}
            onChange={subjectInputHandler}
            onKeyDown={(event) => {
              if (event.key.toLowerCase() === 'enter') {
                event.preventDefault();
                document.getElementById('message').focus();
              }
            }}
            enterKeyHint='next'
            value={enteredValues.subject.value}
          />
          <span>{invalid.subject}</span>
        </div>
        <div className={classes.inputbox}>
          <label htmlFor='message'>{labels.text}</label>
          <textarea
            className={!enteredValues.text.isValid ? classes.inputInvalid : ''}
            name='message'
            id='message'
            maxLength='1000'
            placeholder={placeholders.text}
            onChange={textInputHandler}
            value={enteredValues.text.value}
          />
          <span>{invalid.text}</span>
        </div>
        <div className={classes['btn-container']}>
          <Button send>{button}</Button>
        </div>
      </form>
    </main>
  );
};

export default EmailForm;
