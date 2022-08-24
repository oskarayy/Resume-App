import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import LangContext from '../store/langContext';

import SubpageTopbar from '../components/interface/SubpageTopbar';
import SubpageNavigation from '../components/interface/SubpageNavigation';
import AnimatedDiv from '../components/animations/AnimatedDiv';
import ProjectContent from '../components/projects/ProjectContent';
import NoPage from './NoPage';

import { replaceProjectsImages } from '../utils/replaceProjectsImages';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const ctx = useContext(LangContext);
  const { links, content, textGithub } = ctx.data.projects;

  const projects = Object.values(content);
  const linksArr = Object.values(links);

  const [paths, titles] = [
    projects.map((item) => item.id),
    projects.map((item) => item.title)
  ];

  const activeIndex = projects.findIndex((project) => project.id === projectId);
  const activeProject = projects[activeIndex];
  const pageFound = paths.includes(projectId) || !projectId;

  replaceProjectsImages(projects);

  if (!pageFound) return <NoPage />;

  return (
    <AnimatedDiv>
      <SubpageTopbar title={titles[activeIndex]} />
      <ProjectContent
        description={activeProject.description}
        image={activeProject.image}
        link={linksArr[activeIndex]}
        textGithub={textGithub}
      />
      <SubpageNavigation
        paths={paths}
        titles={titles}
        pageIndex={activeIndex}
        prefix={'/projects/'}
      />
    </AnimatedDiv>
  );
};
export default ProjectDetail;
