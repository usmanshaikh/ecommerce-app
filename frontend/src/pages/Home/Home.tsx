import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Images from '@assets/img';
import { ProductCard } from '@components';
import { ROUTES } from '@utils/constants';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const first = () => {};

  const handleProductDetailPage = (id: string) => {
    console.log('handleProductDetailPage', id);
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
                <Box className="card-wrapper" onClick={first}>
                  <img src={Images.Cat3} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="card-wrapper" onClick={first}>
                  <img src={Images.Dog1} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Top Categories
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box className="card-wrapper" sx={{ backgroundColor: '#f8e9d2' }}>
                  <img src={Images.CatFood} className="card-img" alt="Cat And Dog" />
                </Box>
                <Typography className="card-title">Cat Food</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box className="card-wrapper" sx={{ backgroundColor: '#f3ecfc' }}>
                  <img src={Images.CatToy} className="card-img" alt="Cat And Dog" />
                </Box>
                <Typography className="card-title">Cat Toy</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box className="card-wrapper" sx={{ backgroundColor: '#f0fdec' }}>
                  <img src={Images.DogFood} className="card-img" alt="Cat And Dog" />
                </Box>
                <Typography className="card-title">Dog Food</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box className="card-wrapper" sx={{ backgroundColor: '#ffc7c7' }}>
                  <img src={Images.DogToy} className="card-img" alt="Cat And Dog" />
                </Box>
                <Typography className="card-title">Dog Toy</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Best Seller
            </Typography>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item) => (
                <Grid size={{ xs: 12, md: 3 }} key={item}>
                  <ProductCard
                    image={Images.Product1}
                    title="Whiskas Ocean Fish in Gravy Wet Adult Cat"
                    price="500"
                    onClick={handleProductDetailPage}
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
