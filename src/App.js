import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToggleMenu } from './base/main_nav/ToggleMenu';
import { Home } from './pages/home/Home';
import { Settings } from './pages/settings/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
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
  );
}

export default App;
