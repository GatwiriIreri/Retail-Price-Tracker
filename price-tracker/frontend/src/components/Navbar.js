import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Price Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <Button color="inherit" component={Link} to="/suppliers">Suppliers</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;