import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import PriceHistory from './pages/PriceHistory';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a6fa5',
    },
    secondary: {
      main: '#166088',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/history/:productId" element={<PriceHistory />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;