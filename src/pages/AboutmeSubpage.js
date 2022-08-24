import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import LangContext from '../store/langContext';

import SubpageTopbar from '../components/interface/SubpageTopbar';
import DetailContent from '../components/aboutme/DetailContent';
import SubpageNavigation from '../components/interface/SubpageNavigation';
import AnimatedDiv from '../components/animations/AnimatedDiv';
import NoPage from './NoPage';

const AboutmeSubpage = () => {
  const ctx = useContext(LangContext);
  const { paths, categories } = ctx.data.aboutme;
  const { catId } = useParams();

  const pageFound = ['', ...paths].includes(catId);
  if (!pageFound) return <NoPage />;

  const activeCategory = categories.find((item) => item.id === catId);

  const titles = categories.map((item) => item.title);
  const pageIndex = categories.indexOf(activeCategory);

  return (
    <AnimatedDiv>
      <SubpageTopbar title={activeCategory?.title} />
      <DetailContent activeCategory={activeCategory} />
      <SubpageNavigation
        pageIndex={pageIndex}
        paths={paths}
        titles={titles}
        prefix={'/aboutme/'}
      />
    </AnimatedDiv>
  );
};
export default AboutmeSubpage;
