import ReactDOM from 'react-dom';
import { useContext } from 'react';
import LangContext from './store/langContext';
import InterfaceContext from './store/interfaceContext';

// import Error from './components/interface/UI/Error';
// import LoadingSpinner from './components/interface/UI/LoadingSpinner';

import Sidebar from './components/interface/sidebar/Sidebar';
import LangModal from './components/interface/UI/LangModal';
import MainLayout from './components/interface/MainLayout';
import AnimatedRoutes from './routes/AnimatedRoutes';

import './App.css';

//fonts
import './fonts/Roboto-Light.ttf';
import './fonts/Roboto-Thin.ttf';
import './fonts/RobotoCondensed-Bold.ttf';
import './fonts/RobotoCondensed-Regular.ttf';
import './fonts/RobotoCondensed-Light.ttf';
import './fonts/Prompt-SemiBold.ttf';
import './fonts/Prompt-Regular.ttf';

function App() {
  // const { showLangModal, data, isLoading, error } = useContext(LangContext);
  const { showLangModal } = useContext(LangContext);
  const { showSidebar, onToggleSidebar } = useContext(InterfaceContext);

  const modalRoot = document.getElementById('modal-root');
  const sidebarRoot = document.getElementById('sidebar-root');

  // if (error || isLoading)
  //   return (
  //     <MainLayout>
  //       <div className='centered-full-div'>
  //         {error && <Error error={error} />}
  //         {isLoading && <LoadingSpinner main={true} />}
  //       </div>
  //     </MainLayout>
  //   );

  // if (!error && !isLoading && data)
  return (
    <MainLayout>
      {showLangModal && ReactDOM.createPortal(<LangModal />, modalRoot)}
      {showSidebar &&
        ReactDOM.createPortal(
          <Sidebar onToggleSidebar={onToggleSidebar} />,
          sidebarRoot
        )}
      <AnimatedRoutes />
    </MainLayout>
  );
}

export default App;
