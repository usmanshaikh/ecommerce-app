import { Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '@components';
import { ROUTES } from '@utils/constants';

const CheckoutFailed = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" color="error" fontWeight={600}>
          Payment Cancelled
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your order was not completed. You can try again.
        </Typography>
        <CustomButton variantType="fill" fullWidth sx={{ mt: 2 }} onClick={() => navigate(`/${ROUTES.CART}`)}>
          Go Back to Cart
        </CustomButton>
      </Stack>
    </Box>
  );
};

export default CheckoutFailed;
