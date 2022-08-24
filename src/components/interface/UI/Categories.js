import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faMagicWandSparkles,
  faTrophy,
  faGraduationCap,
  faBriefcase,
  faComments,
  faBookOpen,
  faGuitar,
  faStar
} from '@fortawesome/free-solid-svg-icons';

import classes from './Categories.module.css';
import Card from './Card';

const resumeIcons = [
  faAddressCard,
  faMagicWandSparkles,
  faTrophy,
  faGraduationCap,
  faBriefcase,
  faComments
];

const aboutmeIcons = [faBookOpen, faGuitar, faStar];

const Categories = (props) => {
  const { categories, page } = props;
  const navigation = useNavigate();

  const icons = page === 'aboutme' ? aboutmeIcons : resumeIcons;

  return (
    <div className={classes.categories}>
      {categories.map((item, index) => (
        <Card
          key={item.id}
          onClick={() => navigation(item.id)}
          className={classes.category}>
          <h3>
            <FontAwesomeIcon className={classes.icon} icon={icons[index]} />
            {item.title}
          </h3>
        </Card>
      ))}
    </div>
  );
};

export default Categories;
