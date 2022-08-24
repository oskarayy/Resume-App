import classes from './Sidebar.module.css';
import SidebarSubcategories from './SidebarSubcategories';

const Sidebar = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onToggleSidebar}></div>
      <aside className={classes.sidebar}>
        <h2>OskarCzerw.js</h2>
        <SidebarSubcategories />
      </aside>
    </>
  );
};
export default Sidebar;
