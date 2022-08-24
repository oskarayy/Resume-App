import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import LangContext from '../store/langContext';

import ContactData from '../components/resume/ContactData';
import Skills from '../components/resume/Skills';
import ResumeSubpageContent from '../components/resume/ResumeSubpageContent';
import Error from '../components/interface/UI/Error';

import AnimatedDiv from '../components/animations/AnimatedDiv';
import SubpageTopbar from '../components/interface/SubpageTopbar';
import SubpageNavigation from '../components/interface/SubpageNavigation';

const ResumeSubpage = () => {
  const ctx = useContext(LangContext);
  const data = ctx.data.resume;
  const { subtitles: titles, paths } = data;

  const databases = [
    data.contactData,
    data.skills,
    data.courses,
    data.education,
    data.experience,
    data.qa
  ];

  const params = useParams().resId;
  const activePageData = {};

  const pageFound = ['', ...paths].includes(params);
  if (!pageFound)
    return (
      <AnimatedDiv>
        <SubpageTopbar title='Error' to='/resume' />
        <Error nopage error='Wrong adress' />
      </AnimatedDiv>
    );

  for (let path of paths) {
    if (path === params) {
      const index = paths.indexOf(path);
      activePageData.pageIndex = index;
      activePageData.pageData = databases[index];
    }
  }

  const { pageIndex, pageData } = activePageData;

  return (
    <AnimatedDiv>
      <SubpageTopbar title={titles[pageIndex]} />
      {pageIndex === 0 && <ContactData data={pageData} />}
      {pageIndex === 1 && <Skills data={pageData} />}
      {pageIndex > 1 && (
        <ResumeSubpageContent data={pageData} path={paths[pageIndex]} />
      )}
      <SubpageNavigation
        pageIndex={pageIndex}
        paths={paths}
        titles={titles}
        prefix={'/resume/'}
      />
    </AnimatedDiv>
  );
};
export default ResumeSubpage;
