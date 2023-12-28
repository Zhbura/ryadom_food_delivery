import './App.scss';
import { Footer } from './components/Footer/Footer';
import { HeaderBig, HeaderSmall } from './components/Header/Header';
import { TopBar } from './components/TopBar/TopBar';

function App() {
  return (
    <>
      <div className="wrap-reverse">
        <TopBar />
        <HeaderBig />
        <HeaderSmall />
      </div>
      <Footer />
    </>
  );
}

export default App;
