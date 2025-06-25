import { Box, Typography, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const SortBar = ({ total }: { total: number }) => {
  const [sort, setSort] = useState('default');

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6" fontWeight={600} sx={{ color: '#000' }}>
        {total} Products found
      </Typography>
      <Select size="small" value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="bestSeller">Best Seller</MenuItem>
        <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
        <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
      </Select>
    </Box>
  );
};

export default SortBar;
