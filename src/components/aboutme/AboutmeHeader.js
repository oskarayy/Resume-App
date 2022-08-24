import classes from './AboutmeHeader.module.css';
import testphoto from '../../images/aboutme2.jpg';

const AboutmeHeader = () => {
  return (
    <div className={classes.header}>
      <img src={testphoto} alt='admin face' />
    </div>
  );
};

export default AboutmeHeader;
