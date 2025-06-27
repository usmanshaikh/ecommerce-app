import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, CardMedia } from '@mui/material';
import orderApi from '@api/orderApi';
import type { OrderResponse } from '@api/types';
import { formatDate } from '@utils/helpers';

const Orders = () => {
  const [orders, setOrders] = useState<OrderResponse[]>([]);

  const fetchOrders = async () => {
    try {
      const res = await orderApi.getUserOrders();
      if (res.data.status === 'success') {
        setOrders(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch orders', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Box maxWidth="lg" mx="auto" px={{ xs: 2, md: 4 }} py={4} className="order-history-page">
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Order History
      </Typography>

      {orders.map((order) => (
        <Card key={order._id} sx={{ mb: 4 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={2}>
              <Typography variant="subtitle1">Order ID: {order.orderId}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {formatDate(order.orderedAt)}
              </Typography>
            </Box>
            <Divider />
            <Grid container spacing={2} mt={1}>
              {order.items.map((item) => (
                <Grid key={item.product._id} size={{ xs: 12, sm: 6 }}>
                  <Box display="flex" gap={2}>
                    <CardMedia
                      component="img"
                      image={item.product.images[0]}
                      alt={item.product.name}
                      sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1 }}
                    />
                    <Box>
                      <Typography fontWeight={500}>{item.product.name}</Typography>
                      <Typography variant="body2">Qty: {item.quantity}</Typography>
                      <Typography variant="body2">₹{item.price}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight={600}>Total: ₹{order.totalAmount}</Typography>
              <Box
                px={2}
                py={0.5}
                border="1px solid rgba(0, 0, 0, 0.23)"
                borderRadius="4px"
                fontSize="0.875rem"
                color="rgba(0, 0, 0, 0.6)"
                display="inline-block">
                Order Status: {order.orderStatus}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Orders;
