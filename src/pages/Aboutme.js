import { useContext } from 'react';
import LangContext from '../store/langContext';

import AboutmeHeader from '../components/aboutme/AboutmeHeader';
import Categories from '../components/interface/UI/Categories';
import SubpageTopbar from '../components/interface/SubpageTopbar';
import AnimatedDiv from '../components/animations/AnimatedDiv';

const Aboutme = () => {
  const ctx = useContext(LangContext);
  const { title, categories } = ctx.data.aboutme;

  return (
    <AnimatedDiv>
      <SubpageTopbar title={title} />
      <AboutmeHeader />
      <Categories categories={categories} page='aboutme' />
    </AnimatedDiv>
  );
};

export default Aboutme;
