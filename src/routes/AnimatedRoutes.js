import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import Aboutme from '../pages/Aboutme';
import AboutmeSubpage from '../pages/AboutmeSubpage';
import Resume from '../pages/Resume';
import ResumeSubpage from '../pages/ResumeSubpage';
import Certificate from '../components/resume/Certificate';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import Contact from '../pages/Contact';
import Error from '../components/interface/UI/Error';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/aboutme/:catId' element={<AboutmeSubpage />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/resume/:resId' element={<ResumeSubpage />} />
        <Route
          path='/resume/courses/:certificateId'
          element={<Certificate />}
        />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='*'
          element={<Error title='Page not found' error='Wrong page adress' />}
        />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
