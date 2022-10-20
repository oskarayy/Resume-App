import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LangContext from '../../store/langContext';
import SubpageTopbar from '../interface/SubpageTopbar';

import classes from './Certificate.module.css';
import certBeginner from '../../images/certificates/cert-beginner.jpg';
import certAdvanced from '../../images/certificates/cert-advanced.jpg';
import certJS from '../../images/certificates/cert-js.jpg';
import certCodeme from '../../images/certificates/cert-codeme.jpg';
import certReact from '../../images/certificates/cert-react-udemy.jpg';
import certReactNative from '../../images/certificates/cert-react-native-udemy.jpg';
import certTypescript from '../../images/certificates/cert-typescript.jpg';

const coursesImages = [
  certBeginner,
  certAdvanced,
  certJS,
  certCodeme,
  certReact,
  certReactNative,
  certTypescript
];

const Certificate = () => {
  const ctx = useContext(LangContext);
  const data = ctx.data.resume;
  const courses = data.courses.items;

  const navigation = useNavigate();
  const path = '/resume/courses/certificate-';

  const params = useParams().certificateId;
  const courseIndex = params.split('-')[2] - 1;
  const activeCourse = data.courses.items[courseIndex];

  return (
    <section className={classes.certificate}>
      <SubpageTopbar to='/resume/courses' title={data.courses.buttonTxt} />
      <div className={classes.image}>
        <img
          src={coursesImages[courseIndex]}
          alt={'certyficate ' + activeCourse.title}
        />
      </div>
      <div className={classes.data}>
        <h2>{activeCourse.title}</h2>
        <div className={classes['data__controls']}>
          <span onClick={() => navigation(path + courses[courseIndex - 1].id)}>
            {courseIndex > 0 && '<'}
          </span>
          <span>{activeCourse.subtitle}</span>
          <span onClick={() => navigation(path + courses[courseIndex + 1].id)}>
            {courseIndex < courses.length - 1 && '>'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
