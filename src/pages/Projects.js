import { useContext } from 'react';
import LangContext from '../store/langContext';

import SubpageTopbar from '../components/interface/SubpageTopbar';
import AnimatedDiv from '../components/animations/AnimatedDiv';
import ProjectsList from '../components/projects/ProjectsList';

const Projects = () => {
  const ctx = useContext(LangContext);
  const { title, content } = ctx.data.projects;
  const projects = Object.values(content);

  return (
    <AnimatedDiv>
      <SubpageTopbar title={title} />
      <ProjectsList data={projects} />
    </AnimatedDiv>
  );
};

export default Projects;
