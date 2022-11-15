import './App.css';
import Homepage from './pages/Homepage';
import Placespage from './pages/Placespage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { GlobalStyles } from './styles/Global.styled'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ScrollToTop } from './Components/ScrollToTop';

library.add(fas, faFontAwesome)


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/places" element={<Placespage />} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
