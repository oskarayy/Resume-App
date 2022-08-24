import { Link } from 'react-router-dom';

import Card from '../interface/UI/Card';
import classes from './ProjectsList.module.css';

import { replaceProjectsImages } from '../../utils/replaceProjectsImages';

const ProjectsList = ({ data }) => {
  replaceProjectsImages(data);

  return (
    <section className={classes.container}>
      {data.map(({ id, title, image }) => (
        <Link key={id} to={id}>
          <Card className={classes.project}>
            <div className={classes.image}>
              <img src={image.src} alt={image.alt} />
            </div>
            <h3>{title}</h3>
          </Card>
        </Link>
      ))}
    </section>
  );
};
export default ProjectsList;
