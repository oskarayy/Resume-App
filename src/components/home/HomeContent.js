import { useContext } from 'react';
import LangContext from '../../store/langContext';
import { openResumePDF } from '../../utils/openResumePDF';

import classes from './HomeContent.module.css';
import Card from '../interface/UI/Card';

const HomeContent = (props) => {
  const ctx = useContext(LangContext);
  const data = ctx.data.home;
  const activeLang = ctx.data.id;

  const actions = [
    openResumePDF.bind(null, activeLang),
    ctx.onToggleModal.bind(null, true),
    props.onIntro
  ];

  return (
    <>
      <section className={classes['first-bar']}>
        <h2 className={classes['home-details']}>{data.headers[0]}</h2>
        {data.bannerTexts.map((text, index) => (
          <p key={'banner-text-' + index}>{text}</p>
        ))}
      </section>
      <section className={classes['second-bar']}>
        <h2 className={classes['home-details']}>{data.headers[1]}</h2>
        {data.details.map((item, index) => (
          <Card
            key={item.id}
            onClick={actions[index]}
            className={classes['second-bar__card']}>
            <h3>{item.text}</h3>
          </Card>
        ))}
      </section>
    </>
  );
};

export default HomeContent;
