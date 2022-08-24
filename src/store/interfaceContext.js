import React, { useState } from 'react';

const initialValues = {
  introIsActive: true,
  showSidebar: false,
  onIntro: () => {},
  onToggleSidebar: () => {}
};

const InterfaceContext = React.createContext(initialValues);

export const InterfaceProvider = (props) => {
  const sessionIntroState = sessionStorage.getItem('intro') ?? true;
  const [introIsActive, setIntroIsActive] = useState(
    +sessionIntroState ? true : false
  );
  const [showSidebar, setShowSidebar] = useState(false);

  const introStatusHandler = (status) => {
    setIntroIsActive(status);
  };

  const toggleSidebarHandler = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <InterfaceContext.Provider
      value={{
        introIsActive,
        showSidebar,
        onIntro: introStatusHandler,
        onToggleSidebar: toggleSidebarHandler
      }}>
      {props.children}
    </InterfaceContext.Provider>
  );
};

export default InterfaceContext;
