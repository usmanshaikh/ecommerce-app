import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { CustomButton } from '@components';
import { profileApi } from '@api';
import { useAppDispatch } from '@hooks/useReduxHooks';
import { showSnackbar } from '@store/slices';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid phone number')
    .required('Phone is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  country: yup.string().required('Country is required'),
  pincode: yup.string().required('Pincode is required'),
});

const Profile = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => updateProfile(values),
  });

  const updateProfile = async (values: any) => {
    try {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        address: {
          street: values.address,
          city: values.city,
          state: values.state,
          pincode: values.pincode,
          country: values.country,
        },
      };
      const res = await profileApi.updateMyProfile(payload);
      if (res.data.status === 'success') {
        dispatch(showSnackbar({ message: 'Profile updated successfully', type: 'success' }));
      }
    } catch (err) {
      dispatch(showSnackbar({ message: 'Failed to update profile', type: 'error' }));
    }
  };

  const fetchProfile = async () => {
    const res = await profileApi.myProfile();
    if (res.data.status === 'success') {
      const data = res.data.data;
      formik.setValues({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        phone: data.phone || '',
        address: data.address?.street || '',
        city: data.address?.city || '',
        state: data.address?.state || '',
        country: data.address?.country || '',
        pincode: data.address?.pincode || '',
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Box maxWidth="lg" mx="auto" p={3}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        My Profile
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              multiline
              rows={2}
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="state"
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="pincode"
              name="pincode"
              label="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CustomButton fullWidth type="submit" variantType="fill">
              Save Changes
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Profile;
