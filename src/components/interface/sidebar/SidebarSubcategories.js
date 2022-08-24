import { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import InterfaceContext from '../../../store/interfaceContext';
import LangContext from '../../../store/langContext';
import classes from './SidebarSubcategories.module.css';

const SidebarCategories = () => {
  const activeId = useLocation().pathname.split('/').pop();
  const navigation = useNavigate();
  const { data } = useContext(LangContext);
  const { onToggleSidebar } = useContext(InterfaceContext);

  // categories
  const titles = data.home.topbarData.navItems;

  // data objects to arrays
  const projects = Object.values(data.projects.content);

  // subcategories
  const resumeItems = data.resume.subtitles;
  const aboutmeItems = data.aboutme.categories.map((item) => item.title);
  const projectsItems = projects.map((item) => item.title);
  const categories = [resumeItems, aboutmeItems, projectsItems];

  // paths
  const mainPaths = data.home.topbarData.paths;
  const subPaths = [
    data.resume.paths,
    data.aboutme.paths,
    projects.map((item) => item.id),
    '/contact'
  ];

  // mainpulation

  let menuCategories = [];

  const openCategoryHandler = (e) => {
    const targetOrder = +e.target.attributes.order?.value;
    if (targetOrder === 3) {
      navigation('/contact');
      onToggleSidebar();
      return;
    }

    if (menuCategories.length < 1)
      menuCategories = [...document.querySelectorAll('nav>ul>li')].slice(0, 3);

    menuCategories.forEach((item) => {
      if (+item.attributes.order.value === targetOrder) {
        item.classList.toggle(classes['category--active']);
      } else if (item.className.includes('active')) {
        item.className = classes.category;
      }
    });
  };

  let activeCategoryIndex = -1;
  subPaths.forEach((item, index) => {
    const subIndex = item.indexOf(activeId);
    if (subIndex > -1) activeCategoryIndex = index;
  });

  return (
    <nav>
      <ul>
        {titles.map((item, indexCategory) => (
          <li
            key={item}
            order={indexCategory}
            onClick={openCategoryHandler}
            className={
              activeCategoryIndex === indexCategory
                ? `${classes.category} ${classes['category--active']}`
                : classes.category
            }>
            <span order={indexCategory}>{item}</span>
            <ul>
              {categories[indexCategory]?.map((item, index) => (
                <li onClick={onToggleSidebar} key={item}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to={
                      mainPaths[indexCategory] +
                      '/' +
                      subPaths[indexCategory][index]
                    }>
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SidebarCategories;
