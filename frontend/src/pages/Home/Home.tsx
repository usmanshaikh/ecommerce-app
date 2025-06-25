import { Box, Container, Grid, Typography } from '@mui/material';
import Images from '../../assets/img';
import './Home.scss';

const Home = () => {
  return (
    <Box className="home-page">
      <Box>
        <img src={Images.Banner} className="home-banner" alt="React logo" />
      </Box>
      <Box>
        <Box component="section" py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Shop by Pet Type
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box bgcolor="#f5f5f5" p={2} textAlign="center">
                  <img src={Images.Cat3} className="" alt="Cat And Dog" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box bgcolor="#f5f5f5" p={2} textAlign="center">
                  <img src={Images.Dog1} className="" alt="Cat And Dog" />
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
                <Box bgcolor="#e8f0fe" p={2} textAlign="center">
                  <img src={Images.CatFood} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box bgcolor="#e8f0fe" p={2} textAlign="center">
                  <img src={Images.CatToy} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box bgcolor="#e8f0fe" p={2} textAlign="center">
                  <img src={Images.DogFood} className="card-img" alt="Cat And Dog" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Box bgcolor="#e8f0fe" p={2} textAlign="center">
                  <img src={Images.DogToy} className="card-img" alt="Cat And Dog" />
                </Box>
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
                  <Box bgcolor="#fff3e0" p={2} textAlign="center">
                    Best Seller {item}
                  </Box>
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
