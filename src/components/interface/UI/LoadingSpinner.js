import { useContext } from 'react';
import LangContext from '../../../store/langContext';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = ({ main, email }) => {
  const { wait, data, mail } = useContext(LangContext).data.interface.loading;

  return (
    <>
      {main && <h3 className={classes['loading-text']}>{wait}</h3>}
      <div className={classes.spinner}></div>
      {main && <h3 className={classes['loading-text']}>{data}</h3>}
      {email && <h3 className={classes['loading-text']}>{mail}</h3>}
    </>
  );
};
export default LoadingSpinner;
