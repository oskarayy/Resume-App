import { useContext } from 'react';
import LangContext from '../../../store/langContext';

import classes from './LangModal.module.css';

//images
import plFlag from '../../../images/flags/pl-flag.png';
import ukFlag from '../../../images/flags/uk-usa-flag.png';
import deFlag from '../../../images/flags/de-flag.png';
const flags = [
  { id: 'pl', src: plFlag, alt: 'Flaga Polski' },
  { id: 'en', src: ukFlag, alt: 'British Flag' },
  { id: 'de', src: deFlag, alt: 'Flagge von Deutschland' }
];

const LangModal = () => {
  const ctx = useContext(LangContext);
  const { onChangeLang, onToggleModal, data } = ctx;
  const { langModal: text } = data.interface;

  const backdropClickedHandler = () => {
    onToggleModal(false);
  };

  const flagClickedHandler = (e) => {
    const clickedFlag = e.target.id;
    onChangeLang(clickedFlag);
    onToggleModal(false);
  };

  return (
    <div onClick={backdropClickedHandler} className={classes.modal}>
      <h2>{text.header}</h2>
      <div className={classes.flags}>
        {flags.map((flag) => (
          <div
            key={flag.src}
            onClick={flagClickedHandler}
            className={classes.flag}>
            <img id={flag.id} src={flag.src} alt={flag.alt} />
          </div>
        ))}
      </div>
      <h4>{text.active}</h4>
    </div>
  );
};

export default LangModal;
