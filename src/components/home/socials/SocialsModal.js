import { useContext } from 'react';
import langContext from '../../../store/langContext';

import Button from '../../interface/UI/Button';
import QRCode from '../../../images/socials/qr.jpg';
import classes from './SocialsModal.module.css';

const SocialsModal = ({ type, onModal }) => {
  const { zoom, whatsapp } = useContext(langContext).data.home.socials;

  const hideModalHandler = () => {
    onModal(null);
  };

  const zoomContent = (
    <>
      <p>{zoom.info}</p>
      <div className={classes.controls}>
        <Button cancel onClick={hideModalHandler}>
          {zoom.buttons.cancel}
        </Button>
        <Button call className={classes.call}>
          <a href='https://us05web.zoom.us/j/9817250615?pwd=bEwyTStqY3JWbXBwNFI3ZDJnNlBlUT09'>
            {zoom.buttons.call}
          </a>
        </Button>
      </div>
    </>
  );

  const whatsappContent = (
    <>
      <p>{whatsapp.info}</p>
      <img src={QRCode} alt='whatsapp qr code' />
      <p className={classes.number}>+48 669 315 303</p>
    </>
  );

  return (
    <div className={classes.backdrop} onClick={hideModalHandler}>
      <div className={classes.modal}>
        <h2>{type === 'zoom' ? 'Zoom' : 'WhatsApp'}</h2>
        {type === 'zoom' ? zoomContent : whatsappContent}
      </div>
    </div>
  );
};
export default SocialsModal;
