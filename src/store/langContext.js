import React, { useCallback, useEffect, useState } from 'react';
// import useFetcher from '../hooks/useFetcher';

import localData from './data/localData.json';

const initialValues = {
  data: {},
  // isLoading: false,
  // error: null,
  showLangModal: false,
  onToggleModal: () => {},
  onChangeLang: () => {}
  // onLocalData: () => {}
};

const LangContext = React.createContext(initialValues);

export const LangProvider = (props) => {
  const data = localData;
  // const [data, setData] = useState(localData);
  const [activeLangData, setLangData] = useState(data.pl);
  const [showLangModal, setShowLangModal] = useState(false);

  const changeLangHandler = useCallback(
    (lang) => {
      localStorage.setItem('activeLanguage', lang);
      switch (lang) {
        case 'pl':
          return setLangData(data.pl);
        case 'en':
          return setLangData(data.en);
        case 'de':
          return setLangData(data.de);
        default:
          throw new Error('Changing language error!');
      }
    },
    [data]
  );

  useEffect(() => {
    const activeLangLS = localStorage.getItem('activeLanguage');
    changeLangHandler(activeLangLS ?? 'pl');
    if (!activeLangLS) {
      setShowLangModal(true);
    }
  }, [changeLangHandler]);

  return (
    <LangContext.Provider
      value={{
        data: activeLangData,
        showLangModal,
        onToggleModal: setShowLangModal,
        onChangeLang: changeLangHandler
      }}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContext;
