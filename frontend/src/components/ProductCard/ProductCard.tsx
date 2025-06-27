import { Box, Typography, IconButton } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { formatCurrency } from '@utils/helpers';
import './ProductCard.scss';

type ProductCardProps = {
  image: string;
  title: string;
  price: string | number;
  quantity?: number;
  onClick?: (value: string) => void;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  hideActions?: boolean;
};

const ProductCard = ({ image, title, price, quantity, onClick, onAddToCart, hideActions = false }: ProductCardProps) => {
  return (
    <Box className="product-card-component" onClick={() => onClick && onClick('1')}>
      <Box className="product-card">
        <Box className="image-wrapper">
          <img src={image} className="card-img" alt="Cat And Dog" />
        </Box>
        <Box className="card-content">
          <Typography className="card-title">{title}</Typography>
          <Typography className="card-price">{formatCurrency(price)}</Typography>
          {quantity && <Typography className="card-quantity">Quantity: {quantity}</Typography>}
        </Box>
      </Box>

      {!hideActions && (
        <Box className="hover-actions" onClick={(e) => e.stopPropagation()}>
          {/* TODO: Implement wishlist functionality */}
          {/* <IconButton onClick={onWishlist} size="small" sx={{ bgcolor: 'white', mb: 1 }}>
            <FavoriteBorder fontSize="small" />
          </IconButton> */}
          <IconButton onClick={onAddToCart} size="small" sx={{ bgcolor: 'white', mb: 1 }}>
            <ShoppingCartOutlined fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default ProductCard;
