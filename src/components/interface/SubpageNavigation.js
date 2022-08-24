import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import classes from './SubpageNavigation.module.css';

const SubpageNavigation = (props) => {
  const { pageIndex, titles, paths, prefix } = props;

  const prevIndex = pageIndex - 1;
  const nextIndex = pageIndex + 1;

  return (
    <div className={classes.controls}>
      {pageIndex > 0 ? (
        <Link to={prefix + paths[prevIndex]}>
          <span className={classes.skip}>
            <FontAwesomeIcon
              className={classes['icon-left']}
              icon={faLeftLong}
            />
            {titles[prevIndex]}
          </span>
        </Link>
      ) : (
        <div></div>
      )}
      {nextIndex < paths.length && (
        <Link to={prefix + paths[nextIndex]}>
          <span className={classes.skip}>
            {titles[nextIndex]}
            <FontAwesomeIcon
              className={classes['icon-right']}
              icon={faRightLong}
            />
          </span>
        </Link>
      )}
    </div>
  );
};

export default SubpageNavigation;
