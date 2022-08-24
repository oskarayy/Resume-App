import { useContext } from 'react';
import LangContext from '../../store/langContext';

import { Link } from 'react-router-dom';
import classes from './HomeTopbar.module.css';

// images
import icon1 from '../../images/icons/cv.png';
import icon2 from '../../images/icons/profile.png';
import icon3 from '../../images/icons/responsive.png';
import icon4 from '../../images/icons/mail.png';
import adminphoto from '../../images/cv-photo-square.png';
const navIcons = [
  { image: icon1, alt: 'Resume icon' },
  { image: icon2, alt: 'Aboutme icon' },
  { image: icon3, alt: 'Projects icon' },
  { image: icon4, alt: 'Contact icon' }
];

// paths

const HomeTopbar = () => {
  const ctx = useContext(LangContext);
  const data = ctx.data.home.topbarData;
  const { header, navItems, paths } = data;

  return (
    <header>
      <div className={classes.topbar}>
        <h1>{header}</h1>
        <div className={classes.image}>
          <img src={adminphoto} alt='Admin Oskar' />
        </div>
      </div>
      <div className={classes.navi}>
        {navItems.map((item, index) => (
          <div className={classes['navi__item']} key={`navbar-item-${index}`}>
            <Link to={paths[index]}>
              <span>
                <img src={navIcons[index].image} alt={navIcons[index].alt} />
              </span>
              <h3>{item}</h3>
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default HomeTopbar;
