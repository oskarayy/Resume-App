import { Link } from 'react-router-dom';

import classes from './EmailSucceed.module.css';
import emailImage from '../../images/emailsucceed.png';

import Button from '../interface/UI/Button';

const EmailSucceed = () => {
  const language = localStorage.getItem('activeLanguage');

  let succeedText = 'Wiadomość wysłana!';
  let buttonText = 'Powrót';

  if (language === 'en') {
    succeedText = 'Message sent!';
    buttonText = 'Home';
  }

  if (language === 'de') {
    succeedText = 'Nachricht gesendet!';
    buttonText = 'Homepage';
  }

  return (
    <>
      <div className={classes['success-image']}>
        <img src={emailImage} alt='success meme with happy kid' />
        <h3 className={classes.success}>{succeedText}</h3>
      </div>
      <Link to='/' className={classes['back-button']}>
        <Button home>{buttonText}</Button>
      </Link>
    </>
  );
};
export default EmailSucceed;
