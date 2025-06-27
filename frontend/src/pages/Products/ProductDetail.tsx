import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { ProductCard } from '@components';
import { productApi } from '@api';
import { useNavigate, useParams } from 'react-router-dom';
import type { Product } from '@api/types';
import { formatCurrency } from '../../utils/helpers';
import { ROUTES } from '../../utils/constants';
import { useAddToCart } from '../../hooks';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { handleAddToCart } = useAddToCart();

  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    if (!id) return;

    productApi.getProductById(id).then((res) => {
      const data = res.data.data;
      if (data) {
        setProduct(data);
      }
    });

    productApi.getRandomProducts().then((res) => {
      const data = res.data.data;
      if (data.length > 0) {
        setRelated(data);
      }
    });
  }, [id]);

  const handleProductDetailPage = (id: string) => {
    navigate(`/${ROUTES.PRODUCTS}/${id}`);
  };

  if (!product) return null;

  return (
    <Box px={{ xs: 2, md: 4 }} py={4} className="product-detail-page">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box component="img" src={product.images[0]} alt={product.name} className="product-image" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" className="product-title">
            {product.name}
          </Typography>

          <Typography variant="h5" className="product-price">
            {formatCurrency(product.price)}
          </Typography>

          <Typography variant="body1" className="product-description">
            {product.description}
          </Typography>

          <Box display="flex" gap={2}>
            <Button
              className="add-to-cart-btn"
              size="large"
              startIcon={<ShoppingCart />}
              onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
            {/* TODO: Implement wishlist functionality */}
            {/* <Button
              variant="outlined"
              size="large"
              startIcon={isWishlisted ? <Favorite /> : <FavoriteBorder />}
              className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => setIsWishlisted((prev) => !prev)}>
              {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </Button> */}
          </Box>
        </Grid>
      </Grid>

      <Box mt={6}>
        <Typography variant="h6" className="related-title">
          Related Products
        </Typography>

        <Grid container spacing={3}>
          {related.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item._id}>
              <ProductCard
                image={item.images[0]}
                title={item.name}
                price={item.price.toString()}
                onClick={() => handleProductDetailPage(item._id)}
                onAddToCart={() => handleAddToCart(item)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetail;
