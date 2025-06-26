import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { ProductCard } from '@components';
import { ROUTES } from '@utils/constants';
import SidebarFilters from './SidebarFilters';
import SortBar from './SortBar';
import type { Product } from '@api/types';
import { productApi } from '@api';
import { useAddToCart } from '@hooks';
import './products.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const { handleAddToCart } = useAddToCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<any>({
    petType: [],
    category: [],
    brand: [],
    minPrice: 0,
    maxPrice: 5000,
    sort: 'default',
  });

  const handleProductDetailPage = (id: string) => {
    navigate(`/${ROUTES.PRODUCTS}/${id}`);
  };

  const fetchProducts = async () => {
    const res = await productApi.getAllProducts(filters);
    if (res.data.status === 'success') {
      setProducts(res.data.data);
    }
  };

  const handleSortChange = (sortValue: string) => {
    setFilters((prev: any) => ({ ...prev, sort: sortValue }));
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  return (
    <Container maxWidth="xl" className="product-list-page">
      <Box display="flex" gap={3}>
        <Box width="250px">
          <SidebarFilters filters={filters} setFilters={setFilters} />
        </Box>
        <Box flex={1} sx={{ px: 3 }}>
          <SortBar total={products.length} onSortChange={handleSortChange} />
          <Grid container spacing={2} mt={1}>
            {products.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item._id}>
                <ProductCard
                  image={item.images[0]}
                  title={item.name}
                  price={item.price}
                  onClick={() => handleProductDetailPage(item._id)}
                  onAddToCart={() => handleAddToCart(item)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductList;
