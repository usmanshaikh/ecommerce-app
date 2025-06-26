import { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Grid, TextField, Typography, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
import * as yup from 'yup';
import axios from 'axios';
import { CustomButton } from '../../components';
import { MSG as MESSAGE } from '../../utils/constants';

const MSG = MESSAGE.VALIDATION.PRODUCT;
const validationSchema = yup.object({
  name: yup.string().required(MSG.NAME.REQUIRED),
  description: yup.string().required(MSG.DESCRIPTION.REQUIRED),
  price: yup.number().required(MSG.PRICE.REQUIRED).positive(MSG.PRICE.POSITIVE),
  stock: yup.number().required(MSG.STOCK.REQUIRED).min(0, MSG.STOCK.MIN),
  brand: yup.string().required(MSG.BRAND.REQUIRED),
  category: yup.string().required(MSG.CATEGORY.REQUIRED),
  petType: yup.string().oneOf(['cat', 'dog'], MSG.PET_TYPE.ONE_OF).required(MSG.PET_TYPE.REQUIRED),
});

const AddProduct = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      stock: '',
      brand: '',
      category: '',
      petType: '',
    },
    validationSchema,
    onSubmit: async (values) => {},
  });

  return (
    <Box maxWidth="lg" mx="auto" p={3}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Product Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="price"
              name="price"
              label="Price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={3}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="stock"
              name="stock"
              label="Stock"
              type="number"
              value={formik.values.stock}
              onChange={formik.handleChange}
              error={formik.touched.stock && Boolean(formik.errors.stock)}
              helperText={formik.touched.stock && formik.errors.stock}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="brand"
              name="brand"
              label="Brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              error={formik.touched.brand && Boolean(formik.errors.brand)}
              helperText={formik.touched.brand && formik.errors.brand}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                error={formik.touched.category && Boolean(formik.errors.category)}>
                <MenuItem value="cat food">Cat Food</MenuItem>
                <MenuItem value="cat toy">Cat Toy</MenuItem>
                <MenuItem value="dog food">Dog Food</MenuItem>
                <MenuItem value="dog toy">Dog Toy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Pet Type</InputLabel>
              <Select
                id="petType"
                name="petType"
                value={formik.values.petType}
                onChange={formik.handleChange}
                error={formik.touched.petType && Boolean(formik.errors.petType)}>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="dog">Dog</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <input
              accept="image/*"
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                if (file) {
                  setImage(file);
                  setImagePreview(URL.createObjectURL(file));
                }
              }}
            />
            {imagePreview && <img src={imagePreview} alt="Preview" height={100} />}
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CustomButton fullWidth type="submit" variantType="fill">
              Add Product
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProduct;
