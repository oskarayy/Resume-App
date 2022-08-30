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
  const { content, textApp } = ctx.data.projects;

  const projects = Object.values(content);

  const activeIndex = projects.findIndex((project) => project.id === projectId);
  const activeProject = projects[activeIndex];

  const [paths, titles] = [
    projects.map((item) => item.id),
    projects.map((item) => item.title)
  ];

  replaceProjectsImages(projects);

  const pageFound = paths.includes(projectId) || !projectId;
  if (!pageFound) return <NoPage />;

  return (
    <AnimatedDiv>
      <SubpageTopbar title={activeProject.title} />
      <ProjectContent textApp={textApp} {...activeProject} />
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
