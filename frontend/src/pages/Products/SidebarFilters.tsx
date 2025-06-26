import { Box, FormGroup, FormControlLabel, Checkbox, Typography, Slider } from '@mui/material';

const checkboxStyle = { color: '#000', '&.Mui-checked': { color: '#000' } };

type SidebarFiltersProps = {
  filters: {
    petType: string[];
    category: string[];
    minPrice: number;
    maxPrice: number;
  };
  setFilters: (filters: SidebarFiltersProps['filters']) => void;
};

const SidebarFilters = ({ filters, setFilters }: SidebarFiltersProps) => {
  const handleCheckboxChange = (group: 'petType' | 'category', value: string) => {
    const selectedValues = filters[group];
    let updatedValues: string[];
    if (selectedValues.includes(value)) {
      // Remove the value
      updatedValues = selectedValues.filter((v) => v !== value);
    } else {
      // Add the value
      updatedValues = [...selectedValues, value];
    }
    setFilters({ ...filters, [group]: updatedValues });
  };

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    setFilters({ ...filters, minPrice: min, maxPrice: max });
  };

  return (
    <Box sx={{ px: 3 }}>
      <Typography variant="h6" my={1} fontWeight={600}>
        Pet Type
      </Typography>
      <FormGroup>
        {['cat', 'dog'].map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                sx={checkboxStyle}
                checked={filters.petType.includes(type)}
                onChange={() => handleCheckboxChange('petType', type)}
              />
            }
            label={type[0].toUpperCase() + type.slice(1)}
            sx={{ color: '#000' }}
          />
        ))}
      </FormGroup>

      <Typography variant="h6" my={1} fontWeight={600}>
        Category
      </Typography>
      <FormGroup>
        {['cat food', 'cat toy', 'dog food', 'dog toy'].map((cat) => (
          <FormControlLabel
            key={cat}
            control={
              <Checkbox
                sx={checkboxStyle}
                checked={filters.category.includes(cat)}
                onChange={() => handleCheckboxChange('category', cat)}
              />
            }
            label={cat}
            sx={{ color: '#000' }}
          />
        ))}
      </FormGroup>

      <Typography variant="h6" my={1} fontWeight={600} sx={{ color: '#000' }}>
        Price Range
      </Typography>
      <Box mt={3}>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={[filters.minPrice, filters.maxPrice]}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          step={50}
          sx={{ color: '#000' }}
        />
        <Typography variant="body2" mt={1} sx={{ color: '#000' }}>
          ₹{filters.minPrice} – ₹{filters.maxPrice}
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarFilters;
