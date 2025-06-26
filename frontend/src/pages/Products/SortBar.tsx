import { useState } from 'react';
import { Box, Typography, Select, MenuItem, type SelectChangeEvent } from '@mui/material';

type SortBarProps = {
  total: number;
  onSortChange: (sort: string) => void;
};

const SortBar = ({ total, onSortChange }: SortBarProps) => {
  const [sort, setSort] = useState('default');

  const handleChange = (e: SelectChangeEvent) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    onSortChange(selectedSort);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6" fontWeight={600} sx={{ color: '#000' }}>
        {total} Products found
      </Typography>
      <Select size="small" value={sort} onChange={handleChange}>
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="bestSeller">Best Seller</MenuItem>
        <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
        <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
      </Select>
    </Box>
  );
};

export default SortBar;
