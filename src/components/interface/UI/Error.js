import { useContext } from 'react';
import LangContext from '../../../store/langContext';

import errorImage from '../../../images/icons/error.png';
import Button from './Button';
import classes from './Error.module.css';

const Error = ({ error, email, nopage }) => {
  const { onRefresh, onLocalData, data } = useContext(LangContext);
  const content = data.interface.error;

  if (email || nopage)
    return (
      <>
        <div className={classes['error-image']}>
          <img src={errorImage} alt='error sign' />
          <h3 className={classes.error}>{'Error: ' + error}</h3>
        </div>
        {email && <h3 className={classes.error}>{content.mail}</h3>}
        {nopage && <h3 className={classes.error}>{content.nopage}</h3>}
      </>
    );

  return (
    <div className={classes['error-container']}>
      <h3 className={classes.error}>{content.data.title}</h3>
      <div className={classes['error-image']}>
        <img src={errorImage} alt='error sign' />
        <h3 className={classes.error}>{content.data.desc}</h3>
      </div>
      <div className={classes['button-box']}>
        <Button reload onClick={onRefresh}>
          {content.data.reloadBtn}
        </Button>
        <Button data onClick={onLocalData}>
          {content.data.localBtn}
        </Button>
        <p>{content.data.lastUpdate}: 23/08/2022 14:11 UTC</p>
      </div>
    </div>
  );
};
export default Error;
