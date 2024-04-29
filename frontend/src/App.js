import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTeme } from './Theme/DarkTheme';
import Home from './component/Home/Home';

function App() {
  return (
    <ThemeProvider theme={darkTeme}>
      <CssBaseline/>
    <Navbar/>
    <Home/>
      
      
    </ThemeProvider>
  );
}

export default App;
