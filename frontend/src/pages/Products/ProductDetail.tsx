import { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { FavoriteBorder, Favorite, ShoppingCart } from '@mui/icons-material';
import { ProductCard } from '@components';
import Images from '@assets/img';

const ProductDetail = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Box px={{ xs: 2, md: 4 }} py={4} className="product-detail-page">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box component="img" src={Images.Product1} alt="Product" className="product-image" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" className="product-title">
            Premium Cat Food
          </Typography>

          <Typography variant="h5" className="product-price">
            ₹499.00
          </Typography>

          <Typography variant="body1" className="product-description">
            A healthy and delicious meal designed especially for your cat's well-being and energy. A healthy and delicious
            meal designed especially for your cat's well-being and energy.
          </Typography>

          <Box display="flex" gap={2}>
            <Button className="add-to-cart-btn" size="large" startIcon={<ShoppingCart />}>
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={isWishlisted ? <Favorite /> : <FavoriteBorder />}
              className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => setIsWishlisted((prev) => !prev)}>
              {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box mt={6}>
        <Typography variant="h6" className="related-title">
          Related Products
        </Typography>

        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item}>
              <ProductCard image={Images.Product1} title="Whiskas Ocean Fish in Gravy Wet Adult Cat" price="500" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetail;
