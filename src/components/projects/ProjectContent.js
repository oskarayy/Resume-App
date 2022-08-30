import classes from './ProjectContent.module.css';
import ProjectLink from './ProjectLink';

const ProjectContent = ({ description, image, textApp, github, homepage }) => {
  return (
    <>
      <section className={classes.details}>
        <div className={classes.image}>
          <img src={image.src} alt={image.alt} />
        </div>
        <p>{description}</p>
      </section>
      <div className={classes.actions}>
        <ProjectLink link={homepage} text={textApp} />
        <ProjectLink link={github} repo={true} />
      </div>
    </>
  );
};
export default ProjectContent;
