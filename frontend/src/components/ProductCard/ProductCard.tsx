import { Box, Typography, Card, CardActionArea, CardContent, CardMedia, IconButton } from '@mui/material';
import { FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material';
import './ProductCard.scss';

type ProductCardProps = {
  image: string;
  title: string;
  price: string | number;
  onClick?: (value: string) => void;
  onAddToCart?: () => void;
  onWishlist?: () => void;
};

const ProductCard = ({ image, title, price, onClick, onAddToCart, onWishlist }: ProductCardProps) => {
  return (
    <Box className="product-card-component" onClick={() => onClick && onClick('1')}>
      <Box className="product-card">
        <Box className="image-wrapper">
          <img src={image} className="card-img" alt="Cat And Dog" />
        </Box>
        <Box className="card-content">
          <Typography className="card-title">{title}</Typography>
          <Typography className="card-price">₹{price}</Typography>
        </Box>
      </Box>

      <Box className="hover-actions" onClick={(e) => e.stopPropagation()}>
        <IconButton onClick={onWishlist} size="small" sx={{ bgcolor: 'white', mb: 1 }}>
          <FavoriteBorder fontSize="small" />
        </IconButton>
        <IconButton onClick={onAddToCart} size="small" sx={{ bgcolor: 'white', mb: 1 }}>
          <ShoppingCartOutlined fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCard;
