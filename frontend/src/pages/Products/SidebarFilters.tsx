import { Box, FormGroup, FormControlLabel, Checkbox, Typography, Slider } from '@mui/material';
import { useState } from 'react';

const checkboxStyle = { color: '#000', '&.Mui-checked': { color: '#000' } };

const SidebarFilters = () => {
  const [value, setValue] = useState<number[]>([100, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ px: 3 }}>
      <Typography variant="h6" my={1} fontWeight={600}>
        Pet Type
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Cat" sx={{ color: '#000' }} />
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Dog" sx={{ color: '#000' }} />
      </FormGroup>

      <Typography variant="h6" my={1} fontWeight={600}>
        Category
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Cat Food" sx={{ color: '#000' }} />
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Cat Toy" sx={{ color: '#000' }} />
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Dog Food" sx={{ color: '#000' }} />
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Dog Toy" sx={{ color: '#000' }} />
      </FormGroup>

      <Typography variant="h6" my={1} fontWeight={600}>
        Brand
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Drools" sx={{ color: '#000' }} />
        <FormControlLabel control={<Checkbox sx={checkboxStyle} />} label="Meowsi" sx={{ color: '#000' }} />
      </FormGroup>

      <Typography variant="h6" my={1} fontWeight={600} sx={{ color: '#000' }}>
        Price Range
      </Typography>
      <Box mt={3}>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          step={50}
          sx={{ color: '#000' }}
        />
        <Typography variant="body2" mt={1} sx={{ color: '#000' }}>
          ₹{value[0]} – ₹{value[1]}
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarFilters;
