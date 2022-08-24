import classes from './WelcomeTopbar.module.css';

const WelcomeTopbar = (props) => {
  const { skipTxt, onExactBanner } = props;
  const skipHandler = () => {
    onExactBanner(3);
  };

  return (
    <div className={classes.topbar}>
      <h1>OskarCzerw.js</h1>
      <span onClick={skipHandler}>{skipTxt}</span>
    </div>
  );
};

export default WelcomeTopbar;
