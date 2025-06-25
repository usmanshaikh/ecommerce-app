import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { MSG, ROUTES } from '../../utils/constants';
import { CustomButton } from '../../components';
import './Auth.scss';

const validationSchema = yup.object({
  firstName: yup.string().required(MSG.VALIDATION.NAME.FIRST),
  lastName: yup.string().required(MSG.VALIDATION.NAME.LAST),
  email: yup.string().email(MSG.VALIDATION.EMAIL.INVALID).required(MSG.VALIDATION.EMAIL.REQUIRED),
  password: yup
    .string()
    .min(MSG.VALIDATION.PASSWORD.MIN_LENGTH, MSG.VALIDATION.PASSWORD.LENGTH_ERROR)
    .required(MSG.VALIDATION.PASSWORD.REQUIRED),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin();
    },
  });

  const navigate = useNavigate();

  const handleLogin = () => {};

  const handleRegister = () => {};

  return (
    <Box className="register-page">
      <Box sx={{ width: 400 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Create Account
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Join us and pamper your pet!
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 2 }}>
              <TextField
                fullWidth
                variant="standard"
                id="firstName"
                name="firstName"
                label="First Name"
                autoComplete="off"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <TextField
                fullWidth
                variant="standard"
                id="lastName"
                name="lastName"
                label="Last Name"
                autoComplete="off"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <TextField
                fullWidth
                variant="standard"
                id="email"
                name="email"
                label="Email"
                autoComplete="off"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <TextField
                fullWidth
                variant="standard"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Box>
              <CustomButton type="submit" variantType="fill" fullWidth sx={{ mt: 2 }}>
                Register
              </CustomButton>
            </Box>
            <Box>
              <span style={{ textAlign: 'center', display: 'block' }}>Already have an account?</span>
              <CustomButton variantType="white" fullWidth sx={{ mt: 2 }} onClick={() => navigate(`/${ROUTES.LOGIN}`)}>
                Login
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
