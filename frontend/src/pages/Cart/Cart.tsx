import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { CustomButton, EmptyView, ProductCard } from '@components';
import { ROUTES } from '@utils/constants';
import { useNavigate } from 'react-router-dom';
import type { CartResponse } from '@api/types';
import { cartApi } from '@api';
import { formatCurrency } from '@utils/helpers';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartResponse[]>([]);

  const fetchCart = async () => {
    try {
      const res = await cartApi.getCart();
      if (res.data.status === 'success') {
        setCartItems(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    try {
      const res = await cartApi.removeItemFromCart(productId);
      if (res.data.status === 'success') {
        setCartItems(res.data.data);
      }
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <Box maxWidth="lg" mx="auto" px={{ xs: 2, md: 4 }} py={4}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <EmptyView title="Your cart is empty" />
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.product._id}>
                <ProductCard
                  image={item.product.images[0]}
                  title={item.product.name}
                  price={item.product?.price}
                  quantity={item.quantity}
                  hideActions={true}
                />
                <Box mt={1}>
                  <CustomButton variantType="white" fullWidth onClick={() => handleRemoveItem(item.product._id)}>
                    Remove
                  </CustomButton>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Box textAlign="right">
            <Typography variant="h6" fontWeight={500} mb={2}>
              Subtotal: {formatCurrency(subtotal)}
            </Typography>
            <CustomButton variantType="fill" sx={{ mt: 2 }} onClick={() => navigate(`/${ROUTES.CHECKOUT}`)}>
              Proceed to Checkout
            </CustomButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
