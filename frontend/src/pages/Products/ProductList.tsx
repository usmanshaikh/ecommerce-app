import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { ProductCard } from '../../components';
import { ROUTES } from '../../utils/constants';
import SidebarFilters from './SidebarFilters';
import SortBar from './SortBar';
import Images from '../../assets/img';
import './products.scss';

const dummyProducts = new Array(8).fill(null).map((_, i) => ({
  id: `p${i}`,
  title: `Product ${i + 1}`,
  image: Images.Product1,
  price: 199 + i * 50,
}));

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductDetailPage = (id: string) => {
    console.log('handleProductDetailPage', id);
    navigate(`/${ROUTES.PRODUCTS}/${id}`);
  };
  return (
    <Container maxWidth="xl" className="product-list-page">
      <Box display="flex" gap={3}>
        <Box width="250px">
          <SidebarFilters />
        </Box>
        <Box flex={1} sx={{ px: 3 }}>
          <SortBar total={dummyProducts.length} />
          <Grid container spacing={2} mt={1}>
            {dummyProducts.map((p) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={p.id}>
                <ProductCard image={p.image} title={p.title} price={p.price} onClick={handleProductDetailPage} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductList;
