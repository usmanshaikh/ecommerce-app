import { useEffect, useState } from 'react';
import { Box, Typography, TextField, Grid, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CustomButton, EmptyView } from '@components';
import { formatCurrency } from '@utils/helpers';
import type { CartResponse } from '@api/types';
import { cartApi, checkoutApi } from '@api';
import { useAppSelector } from '@hooks';
import type { RootState } from '@store';

const validationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid phone number')
    .required('Phone Number is required'),
  address: yup.string().required('Street Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  country: yup.string().required('Country is required'),
  pincode: yup.string().required('PIN Code is required'),
  paymentMethod: yup.string().required('Please select a payment method'),
});

const Checkout = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);
  const [cartItems, setCartItems] = useState<CartResponse[]>([]);

  const formik = useFormik({
    initialValues: {
      fullName: 'Usman Shaikh',
      phone: '8888888888',
      address: '401 High star',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      pincode: '400088',
      paymentMethod: 'cod',
    },
    validationSchema,
    onSubmit: (values) => handleCheckoutSubmit(values),
  });

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

  const handleCheckoutSubmit = async (values: any) => {
    const payload = {
      items: cartItems.map((item) => ({
        product: item.product._id,
        price: item.product.price,
        quantity: item.quantity,
      })),
      address: {
        street: values.address,
        city: values.city,
        state: values.state,
        country: values.country,
        pincode: values.pincode,
      },
      totalAmount,
      paymentMethod: values.paymentMethod,
    };

    try {
      const res = await checkoutApi.createStripeSession(payload);
      if (res.data.status === 'success') {
        const redirectUrl = res.data.data.url;
        window.location.href = redirectUrl;
      }
    } catch (error) {
      console.error('Checkout failed', error);
    }
  };

  useEffect(() => {
    isLoggedIn && fetchCart();
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const delivery = 50;
  const totalAmount = subtotal + delivery;

  return (
    <Box maxWidth="lg" mx="auto" px={{ xs: 2, md: 4 }} py={4}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Checkout
      </Typography>

      {cartItems.length === 0 ? (
        <EmptyView title="Your cart is empty" />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" fontWeight={500} mb={2}>
                Shipping Address
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Street Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                margin="normal"
              />
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                margin="normal"
              />
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                margin="normal"
              />
              <TextField
                fullWidth
                label="PIN Code"
                name="pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={formik.touched.pincode && formik.errors.pincode}
                margin="normal"
              />

              <Box mt={4}>
                <Typography variant="h6" fontWeight={500} mb={2}>
                  Payment Method
                </Typography>
                <FormControl fullWidth>
                  <InputLabel>Select Payment</InputLabel>
                  <Select
                    name="paymentMethod"
                    value={formik.values.paymentMethod}
                    onChange={formik.handleChange}
                    error={formik.touched.paymentMethod && Boolean(formik.errors.paymentMethod)}>
                    <MenuItem value="cod">Cash on Delivery</MenuItem>
                    <MenuItem value="card">Credit/Debit Card</MenuItem>
                    <MenuItem value="upi">UPI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" fontWeight={500} mb={2}>
                Order Summary
              </Typography>
              <Box>
                {cartItems.map((item) => (
                  <Typography key={item.product._id}>
                    {item.product.name} x {item.quantity}
                  </Typography>
                ))}
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" mb={1}>
                Subtotal: {formatCurrency(subtotal)}
              </Typography>
              <Typography variant="body1" mb={3}>
                Delivery: {formatCurrency(delivery)}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                Total: {formatCurrency(totalAmount)}
              </Typography>

              <CustomButton type="submit" variantType="fill" sx={{ mt: 2 }}>
                Place Order
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};

export default Checkout;
