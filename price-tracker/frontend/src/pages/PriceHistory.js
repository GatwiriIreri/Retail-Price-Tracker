import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const PriceHistory = () => {
  const { productId } = useParams();
  
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>Price History</Typography>
      <Typography>Price history for product ID: {productId}</Typography>
    </Container>
  );
};

export default PriceHistory;