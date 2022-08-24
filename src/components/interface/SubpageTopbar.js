import { Link, useLocation } from 'react-router-dom';

import classes from './SubpageTopbar.module.css';
import arrowImg from '../../images/icons/left-arrow.png';
import HamburgerBox from './sidebar/hamburger/HamburgerBox';

const SubpageTopbar = ({ title, error }) => {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  pathArr.pop();
  const backBtnPath = pathArr.length > 1 && !error ? pathArr.join('/') : '/';

  return (
    <header className={classes.subpage}>
      <div className={classes.arrow}>
        <Link to={backBtnPath}>
          <img src={arrowImg} alt='arrow/strzałka' />
        </Link>
      </div>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <HamburgerBox />
    </header>
  );
};

export default SubpageTopbar;
