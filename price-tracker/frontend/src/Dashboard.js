import { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import PriceChart from '../components/PriceChart';

const Dashboard = () => {
  const [bestPrices, setBestPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestPrices = async () => {
      try {
        const response = await axios.get('/api/prices/best');
        setBestPrices(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching best prices:', err);
        setLoading(false);
      }
    };
    fetchBestPrices();
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Current Best Prices</Typography>
      <Grid container spacing={3}>
        {bestPrices.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.product._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.product.name}</Typography>
                <Typography color="text.secondary">
                  {item.product.category} • {item.product.unit}
                </Typography>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  ₹{item.currentPrice.toFixed(2)}
                </Typography>
                <Typography color={item.currentPrice === item.minPrice ? 'success.main' : 'error.main'}>
                  {item.currentPrice === item.minPrice ? 'Best Price!' : `Can save ₹${(item.currentPrice - item.minPrice).toFixed(2)}`}
                </Typography>
                <PriceChart productId={item.product._id} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;