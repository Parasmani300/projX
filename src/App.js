import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartyDetails from './pages/PartyDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div>
   
      <BrowserRouter>
        <Header /> 
        <Routes>
          {/* <Route element={<Home />} path="" /> */}
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="home" />
          <Route element={<PartyDetails />} path="details" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
