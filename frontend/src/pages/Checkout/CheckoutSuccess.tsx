import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material';
import checkoutApi from '@api/checkoutApi';
import { cartApi } from '../../api';
import { useAppDispatch } from '../../hooks';
import { setCartCount } from '../../store/slices';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const sessionId = params.get('session_id');

  useEffect(() => {
    confirmOrder();
  }, [sessionId, navigate]);

  const confirmOrder = async () => {
    try {
      if (sessionId) {
        const res = await checkoutApi.confirmStripeOrder(sessionId);
        if (res.data.status === 'success') {
          getCartCount();
          setTimeout(() => {
            navigate('/orders');
          }, 2000);
        }
      }
    } catch (err: any) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getCartCount = async () => {
    const res = await cartApi.getCart();
    const items = res.data.data;
    const count = items.reduce((total: number, item: any) => total + item.quantity, 0);
    dispatch(setCartCount(count));
  };

  return (
    <Box
      minHeight="70vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center">
      {loading ? (
        <>
          <CircularProgress sx={{ mb: 2 }} />
          <Typography variant="h6">Processing your order...</Typography>
        </>
      ) : error ? (
        <>
          <ErrorOutline color="error" sx={{ fontSize: 60, mb: 1 }} />
          <Typography color="error" variant="h6" mb={1}>
            {error}
          </Typography>
          <Typography>Please contact support if the issue persists.</Typography>
        </>
      ) : (
        <>
          <CheckCircleOutline color="success" sx={{ fontSize: 60, mb: 1 }} />
          <Typography variant="h6">Order confirmed!</Typography>
          <Typography>You will be redirected shortly...</Typography>
        </>
      )}
    </Box>
  );
};

export default CheckoutSuccess;
