import { useEffect, useState, useContext } from 'react';
import InterfaceContext from '../store/interfaceContext';

import AnimatedDiv from '../components/animations/AnimatedDiv';
import Welcome from './Welcome';
import HomeTopbar from '../components/home/HomeTopbar';
import HomeContent from '../components/home/HomeContent';
import Socials from '../components/home/socials/Socials';

const Home = () => {
  const { introIsActive, onIntro } = useContext(InterfaceContext);
  const [activeBanner, setActiveBanner] = useState(0);

  const backToIntroHandler = () => {
    sessionStorage.setItem('intro', 1);
    setActiveBanner(0);
    onIntro(true);
  };

  useEffect(() => {
    if (activeBanner >= 3) {
      sessionStorage.setItem('intro', 0);
      onIntro(false);
    }
  }, [activeBanner, onIntro]);

  const dashboardContent = (
    <>
      <HomeTopbar />
      <HomeContent onIntro={backToIntroHandler} />
      <Socials />
    </>
  );

  return (
    <AnimatedDiv>
      {introIsActive && (
        <Welcome onExactBanner={setActiveBanner} activeBanner={activeBanner} />
      )}
      {!introIsActive && dashboardContent}
    </AnimatedDiv>
  );
};

export default Home;
