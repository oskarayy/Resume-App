import classes from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faHome,
  faCancel,
  faPhone,
  faArrowsRotate,
  faFileCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const Button = ({
  onClick,
  children,
  home,
  send,
  cancel,
  call,
  reload,
  data
}) => {
  const buttonIcon = () => {
    if (home) return faHome;
    if (send) return faPaperPlane;
    if (cancel) return faCancel;
    if (call) return faPhone;
    if (reload) return faArrowsRotate;
    if (data) return faFileCircleCheck;
  };

  const icon = buttonIcon();

  return (
    <button
      onClick={onClick}
      className={classes.btn}
      type={send ? 'submit' : 'button'}>
      <FontAwesomeIcon className={classes.icon} icon={icon} />
      {children}
    </button>
  );
};
export default Button;
