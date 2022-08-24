import { useEffect, useState } from 'react';
import classes from './Skills.module.css';
import diamondImage from '../../images/icons/diamond.png';
import settingsImage from '../../images/icons/settings.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Skills = (props) => {
  const { data } = props;
  const { headers, techSkills, generalSkills } = data;
  const [activeContent, setActiveContent] = useState({
    values: techSkills,
    name: 'tech'
  });

  const techClickHandler = () => {
    setActiveContent({ values: techSkills, name: 'tech' });
  };

  const generalClickHandler = () => {
    setActiveContent({ values: generalSkills, name: 'general' });
  };

  useEffect(() => {
    setActiveContent({ values: techSkills, name: 'tech' });
  }, [techSkills, generalSkills]);

  return (
    <>
      <div className={classes.options}>
        <div
          className={
            activeContent.name === 'tech'
              ? `${classes.option} ${classes.active}`
              : classes.option
          }
          onClick={techClickHandler}>
          <h3>{headers[0]}</h3>
          <img src={settingsImage} alt='gearwheel' />
        </div>
        <div
          className={
            activeContent.name === 'general'
              ? `${classes.option} ${classes.active}`
              : classes.option
          }
          onClick={generalClickHandler}>
          <h3>{headers[1]}</h3>
          <img src={diamondImage} alt='diamond' />
        </div>
      </div>
      <div className={classes.content}>
        <ul>
          {activeContent.values.map((item, index) => (
            <li key={`skills-list-item-${index}`}>
              <span>
                <FontAwesomeIcon className={classes.icon} icon={faStar} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
