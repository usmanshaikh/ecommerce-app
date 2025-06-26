import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { ProductCard } from '../../components';
import { ROUTES } from '../../utils/constants';
import Images from '../../assets/img';

const Wishlist = () => {
  const navigate = useNavigate();

  const handleProductDetailPage = (id: string) => {
    console.log('handleProductDetailPage', id);
    navigate(`/${ROUTES.PRODUCTS}/${id}`);
  };

  return (
    <Box maxWidth="lg" mx="auto" px={{ xs: 2, md: 4 }} py={4} className="wishlist-page">
      <Typography variant="h4" fontWeight={600} gutterBottom>
        My Wishlist
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item}>
            <ProductCard
              image={Images.Product1}
              title="Whiskas Ocean Fish in Gravy Wet Adult Cat"
              price="500"
              onClick={handleProductDetailPage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Wishlist;
