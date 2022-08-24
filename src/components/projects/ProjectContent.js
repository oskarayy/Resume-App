import classes from './ProjectContent.module.css';
import github from '../../images/socials/github.png';

const ProjectContent = ({ description, link, image, textGithub }) => {
  return (
    <>
      <section className={classes.details}>
        <div className={classes.image}>
          <img src={image.src} alt={image.alt} />
        </div>
        <p>{description}</p>
      </section>
      <div className={classes.github}>
        <a
          className={classes.link}
          href={link}
          target='_blank'
          rel='noreferrer'>
          <img src={github} alt='github icon' />
          <p>{textGithub ?? 'GitHub'}</p>
        </a>
      </div>
    </>
  );
};
export default ProjectContent;
