import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTeme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import ProductDetails from './component/ProductPage/ProductDetails';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
import { Cart } from './component/Cart/Cart';

function App() {
  return (
    <ThemeProvider theme={darkTeme}>
      <CssBaseline/>
    {/* <Navbar/> */}
    {/* <Home/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/>
      
    </ThemeProvider>
  );
}

export default App;
