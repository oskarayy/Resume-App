import { useCallback, useReducer } from 'react';
import localData from '../store/data/localData.json';

const fetchingReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'RESPONSE':
      return { ...currentHttpState, isLoading: false };
    case 'ERROR':
      return { isLoading: false, error: action.errorData };
    case 'RESET':
      return { isLoading: false, error: null };
    default:
      throw console.log('USEFETCHER REDUCER ERROR');
  }
};

const useFetcher = () => {
  const [fetching, dispatchFetching] = useReducer(fetchingReducer, {
    isLoading: true,
    error: null
  });

  const fetchData = useCallback(async (applyDataFn) => {
    try {
      // Let backend do the fetching work using correct url
      const response = await fetch(
        'https://resume-app-backend-oskar.herokuapp.com/content'
      );

      if (!response.ok) throw new Error('Fetching error');

      const data = await response.json();

      if (data.length === 0) throw new Error('No data found for this adress');

      const fetchedData = JSON.stringify(data);

      if (fetchedData !== JSON.stringify(localData)) {
        applyDataFn(data);
        console.log('useFetcher: Data updated');
      }
    } catch (error) {
      console.log(error.message);
      dispatchFetching({
        type: 'ERROR',
        errorData: 'Impossible to fetch the data from database.'
      });
    }
    dispatchFetching({ type: 'RESPONSE' });
  }, []);

  const serverVisitLog = useCallback(async () => {
    try {
      const response = await fetch(
        'https://resume-app-backend-oskar.herokuapp.com/log'
      );

      if (!response.ok) throw new Error('serverVisitLog error');
    } catch (error) {
      console.log(error.message || 'New server log error');
    }
    console.log('Server recieved log.');
  }, []);

  const resetErrorState = () => {
    dispatchFetching({ type: 'RESET' });
  };

  return {
    langError: fetching.error,
    langLoading: fetching.isLoading,
    fetchData,
    serverVisitLog,
    resetErrorState
  };
};

export default useFetcher;
