import { useContext } from 'react';
import DataContext from '../store/langContext';

import WelcomeTopbar from '../components/welcome/WelcomeTopbar';
import Banner from '../components/welcome/Banner';
import WelcomeFooter from '../components/welcome/WelcomeFooter';

const Welcome = (props) => {
  const { activeBanner, onExactBanner } = props;
  const ctx = useContext(DataContext);
  const data = ctx.data.welcome;
  const banners = data.banners;

  return (
    <>
      <WelcomeTopbar skipTxt={data.skipText} onExactBanner={onExactBanner} />
      <Banner banners={banners} activeBanner={activeBanner} />
      <WelcomeFooter
        footerText={data.footerText}
        onExactBanner={onExactBanner}
        activeBanner={activeBanner}
      />
    </>
  );
};

export default Welcome;
