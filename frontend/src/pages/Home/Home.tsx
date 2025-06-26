import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Images from '@assets/img';
import { ProductCard } from '@components';
import { ROUTES } from '@utils/constants';
import type { Product } from '@api/types';
import { productApi } from '@api';
import { useAddToCart } from '../../hooks';
import './Home.scss';

const topCategories = [
  { title: 'Cat Food', image: Images.CatFood, bg: '#f8e9d2' },
  { title: 'Cat Toy', image: Images.CatToy, bg: '#f3ecfc' },
  { title: 'Dog Food', image: Images.DogFood, bg: '#f0fdec' },
  { title: 'Dog Toy', image: Images.DogToy, bg: '#ffc7c7' },
];

const Home = () => {
  const navigate = useNavigate();
  const { handleAddToCart } = useAddToCart();

  const [bestSellers, setBestSellers] = useState<Product[]>([]);

  useEffect(() => {
    productApi
      .getBestSellers()
      .then((res) => {
        const data = res.data.data;
        if (data.length > 0) {
          setBestSellers(res.data.data);
        }
      })
      .catch((err) => console.error('Error fetching best sellers', err));
  }, []);

  const handleProductDetailPage = (id: string) => {
    navigate(`/${ROUTES.PRODUCTS}/${id}`);
  };

  return (
    <Box className="home-page">
      <Box className="home-banner-wrapper">
        <img src={Images.Banner} className="home-banner" alt="Petify Banner" />
        <Box className="banner-content">
          <Typography variant="h3" fontWeight={700}>
            Everything Your Pet Deserves
          </Typography>
          <Typography variant="subtitle1" mt={1} mb={3}>
            Shop quality food, toys, and treats
          </Typography>
          <Button className="shop-now-btn" size="large" onClick={() => navigate(`/${ROUTES.PRODUCTS}`)}>
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box>
        <Box component="section" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Shop by Pet Type
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="card-wrapper" onClick={() => navigate(`/${ROUTES.PRODUCTS}`)}>
                  <img src={Images.Cat3} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="card-wrapper" onClick={() => navigate(`/${ROUTES.PRODUCTS}`)}>
                  <img src={Images.Dog1} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" py={4} className="categories-section">
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Top Categories
            </Typography>
            <Grid container spacing={2}>
              {topCategories.map((category, index) => (
                <Grid size={{ xs: 12, md: 3 }} key={index}>
                  <Box
                    className="card-wrapper"
                    sx={{ backgroundColor: category.bg }}
                    onClick={() => navigate(`/${ROUTES.PRODUCTS}`)}>
                    <img src={category.image} className="card-img" alt={category.title} />
                  </Box>
                  <Typography className="card-title">{category.title}</Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Best Seller
            </Typography>
            <Grid container spacing={2}>
              {bestSellers.map((item) => (
                <Grid size={{ xs: 12, md: 3 }} key={item._id}>
                  <ProductCard
                    image={item.images[0]}
                    title={item.name}
                    price={item.price.toString()}
                    onClick={() => handleProductDetailPage(item._id)}
                    onAddToCart={() => handleAddToCart(item)}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
