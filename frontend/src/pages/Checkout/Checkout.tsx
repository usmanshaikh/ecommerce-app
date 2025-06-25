import { Box, Typography, TextField, Grid, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { CustomButton } from '../../components';

const Checkout = () => {
  return (
    <Box px={{ xs: 2, md: 4 }} py={4}>
      <Typography variant="h5" fontWeight={600} mb={4}>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" fontWeight={500} mb={2}>
            Shipping Address
          </Typography>
          <TextField label="Full Name" fullWidth margin="normal" />
          <TextField label="Phone Number" fullWidth margin="normal" />
          <TextField label="Street Address" fullWidth margin="normal" />
          <TextField label="City" fullWidth margin="normal" />
          <TextField label="PIN Code" fullWidth margin="normal" />

          <Box mt={4}>
            <Typography variant="h6" fontWeight={500} mb={2}>
              Payment Method
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Select Payment</InputLabel>
              <Select defaultValue="cod">
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
            <Typography>Whiskas Cat Food x 2</Typography>
            <Typography>Drools Dog Toy x 1</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" mb={1}>
            Subtotal: ₹998
          </Typography>
          <Typography variant="body1" mb={3}>
            Delivery: ₹50
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Total: ₹1048
          </Typography>

          <CustomButton variantType="fill" sx={{ mt: 2 }}>
            Place Order
          </CustomButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
