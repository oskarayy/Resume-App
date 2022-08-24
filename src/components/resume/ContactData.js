import Card from '../interface/UI/Card';
import classes from './ContactData.module.css';

import testphoto from '../../images/cv-photo.png';

const ContactData = (props) => {
  const { data } = props;

  return (
    <>
      <div className={classes['contact-photo']}>
        <img src={testphoto} alt='' />
      </div>
      <div className={classes.data}>
        {data.map((item) => (
          <Card key={item.id} className={classes['data__item']}>
            <span>{item.title}</span>
            <h3>{item.content}</h3>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ContactData;
