import { useContext } from 'react';
import LangContext from '../store/langContext';

import AnimatedDiv from '../components/animations/AnimatedDiv';
import SubpageTopbar from '../components/interface/SubpageTopbar';
import EmailForm from '../components/contact/EmailForm';

const Contact = () => {
  const ctx = useContext(LangContext);
  const { title, formData } = ctx.data.contact;

  return (
    <AnimatedDiv>
      <SubpageTopbar title={title} />
      <EmailForm data={formData} />
    </AnimatedDiv>
  );
};

export default Contact;
