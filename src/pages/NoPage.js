import AnimatedDiv from '../components/animations/AnimatedDiv';
import SubpageTopbar from '../components/interface/SubpageTopbar';
import Error from '../components/interface/UI/Error';

const NoPage = () => {
  return (
    <AnimatedDiv>
      <SubpageTopbar title='Error' error />
      <Error nopage error='404' />
    </AnimatedDiv>
  );
};
export default NoPage;
