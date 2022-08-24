import { useContext } from 'react';
import LangContext from '../store/langContext';

import SubpageTopbar from '../components/interface/SubpageTopbar';
import AnimatedDiv from '../components/animations/AnimatedDiv';

import Categories from '../components/interface/UI/Categories';

const Resume = () => {
  const ctx = useContext(LangContext);
  const data = ctx.data.resume;
  const { title, subtitles: titles, paths } = data;

  const categories = titles.reduce((acc, item, index) => {
    acc.push({ id: paths[index], title: item });
    return acc;
  }, []);

  return (
    <AnimatedDiv>
      <SubpageTopbar title={title} />
      <Categories categories={categories} page='resume' />
    </AnimatedDiv>
  );
};

export default Resume;
