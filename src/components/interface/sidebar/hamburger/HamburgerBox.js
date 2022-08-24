import { useContext } from 'react';
import InterfaceContext from '../../../../store/interfaceContext';

import classes from './HamburgerBox.module.css';

const HamburgerBox = () => {
  const { showSidebar, onToggleSidebar } = useContext(InterfaceContext);
  const boxClass = showSidebar ? classes['box--active'] : classes.box;

  const menuClickHandler = () => {
    onToggleSidebar();
  };

  return (
    <div className={boxClass} onClick={menuClickHandler}>
      <span className={classes.bar1}></span>
      <span className={classes.bar2}></span>
      <span className={classes.bar3}></span>
    </div>
  );
};

export default HamburgerBox;
