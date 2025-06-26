import { Box, Typography, Grid, Card, CardContent, CardMedia, Divider, Button } from '@mui/material';
import Images from '@assets/img';

const dummyOrders = [
  {
    id: 'ORD123',
    date: '2025-06-20',
    total: 999,
    status: 'Delivered',
    items: [
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
      {
        title: 'Meowsi Cat Toy Set',
        image: Images.Product1,
        qty: 1,
        price: 500,
      },
    ],
  },
  {
    id: 'ORD123',
    date: '2025-06-20',
    total: 999,
    status: 'Delivered',
    items: [
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
    ],
  },
  {
    id: 'ORD123',
    date: '2025-06-20',
    total: 999,
    status: 'Delivered',
    items: [
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
      {
        title: 'Drools Chicken Adult Dog Food',
        image: Images.Product1,
        qty: 1,
        price: 499,
      },
    ],
  },
];

const Orders = () => {
  return (
    <Box maxWidth="lg" mx="auto" px={{ xs: 2, md: 4 }} py={4} className="order-history-page">
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Order History
      </Typography>

      {dummyOrders.map((order) => (
        <Card key={order.id} sx={{ mb: 4 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={2}>
              <Typography variant="subtitle1">Order ID: {order.id}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {order.date}
              </Typography>
            </Box>
            <Divider />
            <Grid container spacing={2} mt={1}>
              {order.items.map((item, idx) => (
                <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                  <Box display="flex" gap={2}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1 }}
                    />
                    <Box>
                      <Typography fontWeight={500}>{item.title}</Typography>
                      <Typography variant="body2">Qty: {item.qty}</Typography>
                      <Typography variant="body2">₹{item.price}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontWeight={600}>Total: ₹{order.total}</Typography>
              <Button variant="outlined" size="small" disabled>
                {order.status}
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Orders;
