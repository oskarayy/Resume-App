import github from '../../images/socials/github.png';
import homepage from '../../images/icons/homepage.png';
import classes from './ProjectLink.module.css';

const ProjectLink = ({ link, text, repo }) => {
  return (
    <div className={classes.linkbox}>
      <a className={classes.link} href={link} target='_blank' rel='noreferrer'>
        <img
          src={repo ? github : homepage}
          alt={repo ? 'github icon' : 'homepage icon'}
        />
        <p>{text ?? 'Github Repo'}</p>
      </a>
    </div>
  );
};
export default ProjectLink;
