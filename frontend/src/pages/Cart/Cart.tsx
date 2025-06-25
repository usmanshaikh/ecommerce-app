import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import { CustomButton, ProductCard } from '../../components';
import { ROUTES } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import Images from '../../assets/img';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Box px={{ xs: 2, md: 4 }} py={4}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Shopping Cart
      </Typography>

      <Grid container spacing={3}>
        {[1, 2].map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item}>
            <ProductCard image={Images.Product1} title="Whiskas Cat Food" price="499" />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box textAlign="right">
        <Typography variant="h6" fontWeight={500} mb={2}>
          Subtotal: ₹998
        </Typography>
        <CustomButton variantType="fill" sx={{ mt: 2 }} onClick={() => navigate(`/${ROUTES.CHECKOUT}`)}>
          Proceed to Checkout
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Cart;
