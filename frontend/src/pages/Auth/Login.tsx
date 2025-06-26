import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { MSG, ROUTES } from '@utils/constants';
import { CustomButton } from '@components';
import { useAppDispatch } from '@hooks/useReduxHooks';
import { setTokens, setUser } from '@store/slices/authSlice';
import { showSnackbar } from '@store/slices/snackbarSlice';
import authApi from '@api/authApi';
import './Auth.scss';

const validationSchema = yup.object({
  email: yup.string().email(MSG.VALIDATION.EMAIL.INVALID).required(MSG.VALIDATION.EMAIL.REQUIRED),
  password: yup
    .string()
    .min(MSG.VALIDATION.PASSWORD.MIN_LENGTH, MSG.VALIDATION.PASSWORD.LENGTH_ERROR)
    .required(MSG.VALIDATION.PASSWORD.REQUIRED),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'shaikhusman57@gmail.com',
      password: '123456',
    },
    validationSchema,
    onSubmit: (values) => handleLogin(values),
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const res = await authApi.login(values);
      if (res.data.status === 'success') {
        const { access, refresh } = res.data.data.tokens;
        const { email, _id } = res.data.data.user;
        dispatch(setTokens({ accessToken: access.token, refreshToken: refresh.token }));
        dispatch(setUser({ email, _id }));
        navigate('/');
      }
    } catch (err: any) {
      dispatch(showSnackbar({ message: 'Login failed', type: 'error' }));
    }
  };

  return (
    <Box className="login-page">
      <Box sx={{ width: 400 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Login
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Hello Again! Welcome back
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
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
                Login
              </CustomButton>
            </Box>
            <Box>
              <span style={{ textAlign: 'center', display: 'block' }}>Don't have an account?</span>
              <CustomButton variantType="white" fullWidth sx={{ mt: 2 }} onClick={() => navigate(`/${ROUTES.REGISTER}`)}>
                Create
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
