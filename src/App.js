import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartyDetails from './pages/PartyDetails';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import MyOrders from './pages/MyOrders';
import Navigation from './components/Navigation';
import ConfirmOrder from './pages/ConfirmOrder';
import OptionVariety from './pages/OptionVariety';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <Routes>
          {/* <Route element={<Home />} path="" /> */}
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="home" />
          <Route element={<PartyDetails />} path="/details" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<MyOrders />} path="/orders" />
          <Route element={<ConfirmOrder />} path="/confirm" />
          <Route element={<OptionVariety />} path="/options" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
