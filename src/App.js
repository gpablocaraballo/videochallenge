/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import ControlsComponent from './components/ControlsComponent';
import DisplayComponent from './components/DisplayComponent';
import { AppContext } from './libs/context-lib';
import { useAppReducer } from './libs/reducer-lib';
import {
  AppContainer,
} from './components/Common.styled';

function App() {
  const [state, dispatch] = useAppReducer();
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <AppContainer>
        <DisplayComponent />
        <ControlsComponent />
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;
