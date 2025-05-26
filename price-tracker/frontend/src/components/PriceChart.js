import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = ({ productId }) => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/prices/product/${productId}`);
        setPriceData(response.data);
      } catch (err) {
        console.error('Error fetching price history:', err);
      }
    };
    fetchPriceHistory();
  }, [productId]);

  const data = {
    labels: priceData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Price',
        data: priceData.map(entry => entry.price),
        borderColor: '#4a6fa5',
        backgroundColor: 'rgba(74, 111, 165, 0.1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={{ height: '150px', marginTop: '10px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceChart;