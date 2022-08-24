import bannerImg1 from '../../images/programmer-desk.png';
import bannerImg2 from '../../images/itcommunity.png';
import bannerImg3 from '../../images/people-mobile-app.png';

import classes from './Banner.module.css';

const bannerImages = [
  { image: bannerImg1, alt: "biurko programisty-programmer's desk" },
  {
    image: bannerImg2,
    alt: 'ludzie budują ścianę z kartonu - people are building a wall with boxes'
  },
  {
    image: bannerImg3,
    alt: 'mobilna aplikacja i ludzie - people with a mobile app'
  }
];

const Banner = (props) => {
  const { banners, activeBanner } = props;

  return (
    <>
      {banners.map((banner, index) => (
        <div
          className={
            index === activeBanner ? classes['banner--active'] : classes.banner
          }
          key={`banner-${index}`}>
          <div className={classes['banner-image']}>
            <img
              src={bannerImages[index].image}
              alt={bannerImages[index].alt}
            />
          </div>
          <div className={classes['banner-text']}>
            <h1 className={classes.header}>{banner.header}</h1>
            <p className={classes.description}>{banner.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
