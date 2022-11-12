import './App.css';
import Homepage from './pages/Homepage'
import Placespage from './pages/Placespage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { GlobalStyles } from './styles/Global.styled'



function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/places" element={<Placespage />} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
