import classes from './MainLayout.module.css';

const MainLayout = (props) => {
  return <div className={classes.layout}>{props.children}</div>;
};

export default MainLayout;
