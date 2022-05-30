import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToggleMenu } from './common/ToggleMenu/ToggleMenu';
import { Home } from './pages/home/Home';
import { Settings } from './pages/settings/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { banksLoaded } from './features/banks/banksSlice';
import { getBanks } from './api/banksApi';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {

  //TODO: is it's the right place? Has it be inside effects? Or shoud I make a container?
  const dispatch = useDispatch();
  getBanks().then((banks) => dispatch(banksLoaded({banks: banks})))

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='container'>
        <nav className="navbar" id="menu">
          <Link to="/" id="logo" className="logo colored c-text">Mortgage Calc</Link>
          <ToggleMenu />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App;
