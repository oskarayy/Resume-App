import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import classes from './WelcomeFooter.module.css';

const WelcomeFooter = (props) => {
  const { activeBanner, onExactBanner, footerText } = props;

  const classesDot1 = activeBanner === 0 ? classes.active : '';
  const classesDot2 = activeBanner === 1 ? classes.active : '';
  const classesDot3 = activeBanner === 2 ? classes.active : '';

  const onExactPageHandler = (e) => {
    const index = e.target.attributes.order.value;
    onExactBanner(+index);
  };

  const previousPageHandler = () => {
    onExactBanner((prevState) => prevState - 1);
  };
  const nextPageHandler = () => {
    onExactBanner((prevState) => prevState + 1);
  };

  return (
    <div className={classes.footer}>
      <div className={classes.dots} id='welcome-footer-dots'>
        <span
          onClick={onExactPageHandler}
          order={0}
          className={classesDot1}></span>
        <span
          onClick={onExactPageHandler}
          order={1}
          className={classesDot2}></span>
        <span
          order={2}
          onClick={onExactPageHandler}
          className={classesDot3}></span>
      </div>
      <div className={classes.controls}>
        {activeBanner > 0 && (
          <span className={classes.skip} onClick={previousPageHandler}>
            <FontAwesomeIcon
              className={classes['icon-left']}
              icon={faLeftLong}
            />
            {footerText.back}
          </span>
        )}
        <span className={classes.skip} onClick={nextPageHandler}>
          {activeBanner < 2 ? footerText.next : footerText.finish}
          <FontAwesomeIcon
            className={classes['icon-right']}
            icon={faRightLong}
          />
        </span>
      </div>
    </div>
  );
};

export default WelcomeFooter;
