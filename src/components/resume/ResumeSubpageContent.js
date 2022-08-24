import { Link } from 'react-router-dom';
import Card from '../interface/UI/Card';

import classes from './ResumeSubpageContent.module.css';

const ResumeSubpageContent = (props) => {
  const { data, path } = props;

  // new courses output order
  if (path === 'courses') {
    data.items = data.items.reverse();
  }

  return (
    <section>
      {data.items.map((item) => (
        <Card key={item.id} className={classes.item}>
          <span>{item.subtitle}</span>
          <h3>{item.title}</h3>
          {item.titleDesc && <h4>{item.titleDesc}</h4>}
          {typeof item.description === 'string' && <p>{item.description}</p>}
          {Array.isArray(item.description) &&
            item.description.map((text, index) => (
              <p
                key={'text' + index}
                className={item.description.length > 1 && classes['qatext']}>
                {text + ' '}
              </p>
            ))}
          {item.location && <p className={classes.location}>{item.location}</p>}
          {item.time && <p className={classes.time}>{item.time}</p>}
          {data.buttonTxt && (
            <Link to={`certificate-${item.id}`}>
              <button>{data.buttonTxt}</button>
            </Link>
          )}
        </Card>
      ))}
      {data.endtext && (
        <div className={classes.endtext}>
          {data.endtext.content.map((item, index) => (
            <p key={item.id + '-' + index}>{item}</p>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResumeSubpageContent;
