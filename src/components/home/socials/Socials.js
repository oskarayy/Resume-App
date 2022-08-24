import { useState } from 'react';
import ReactDOM from 'react-dom';

import { icons } from '../../../store/data/socialIcons';

import SocialsIcon from './SocialsIcon';
import SocialsModal from './SocialsModal';
import classes from './Socials.module.css';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const modalRoot = document.getElementById('modal-root');

  return (
    <>
      {activeModal &&
        ReactDOM.createPortal(
          <SocialsModal onModal={setActiveModal} type={activeModal} />,
          modalRoot
        )}
      <footer className={classes.footer}>
        <div className={classes.socials}>
          {icons.map((item) => (
            <SocialsIcon key={item.id} item={item} onModal={setActiveModal} />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
