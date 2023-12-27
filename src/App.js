import './App.scss';
import { HeaderBig, HeaderSmall } from './components/Header/Header';
import { TopBar } from './components/TopBar/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <HeaderBig />
      <HeaderSmall />
    </>
  );
}

export default App;
