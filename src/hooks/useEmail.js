import { useReducer } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_vp1yvju';
const TEMPLATE_ID = 'template_6jnjwi3';
const PUBLIC_KEY = 'wg8atRAY8cjM0lJwl';

const emailReducer = (currentEmailState, action) => {
  switch (action.type) {
    case 'SEND':
      return { isLoading: true, error: null, succeed: false };
    case 'DONE':
      return { ...currentEmailState, isLoading: false, succeed: true };
    case 'ERROR':
      return { isLoading: false, error: action.errorData, succeed: false };
    default:
      throw console.log('HTTP REDUCER ERROR');
  }
};

const useEmail = () => {
  const [sending, dispatchSending] = useReducer(emailReducer, {
    isLoading: false,
    error: null,
    succeed: false
  });

  const sendEmail = async (form) => {
    dispatchSending({ type: 'SEND' });
    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      console.log('Sending email with emailJS succeed');
      if (response.text !== 'OK') throw new Error('Email Sending Error');
    } catch (error) {
      console.log('emailJS: ' + error.message);
      dispatchSending({
        type: 'ERROR',
        errorData: error.message || 'Impossible to send an email.'
      });
    }
    dispatchSending({ type: 'DONE' });
  };

  return {
    emailError: sending.error,
    emailLoading: sending.isLoading,
    emailSucceed: sending.succeed,
    sendEmail
  };
};

export default useEmail;
