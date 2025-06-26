import { Navigate, Route, Routes } from 'react-router-dom';
// import { ProtectedRoute, GuestRoute } from '@components';
import { ROUTES } from '@utils/constants';
import {
  Login,
  Register,
  Profile,
  ProductDetail,
  ProductList,
  Orders,
  Checkout,
  Cart,
  Home,
  Wishlist,
  AddProduct,
} from '@pages';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Guest-only Routes */}
        {/* <Route element={<GuestRoute />}> */}
        <Route path={`/${ROUTES.LOGIN}`} element={<Login />} />
        <Route path={`/${ROUTES.REGISTER}`} element={<Register />} />
        {/* </Route> */}

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path={`/${ROUTES.CART}`} element={<Cart />} />
        <Route path={`/${ROUTES.CHECKOUT}`} element={<Checkout />} />
        <Route path={`/${ROUTES.ORDERS}`} element={<Orders />} />
        <Route path={`/${ROUTES.WISHLIST}`} element={<Wishlist />} />
        <Route path={`/${ROUTES.PROFILE}`} element={<Profile />} />
        <Route path={`/${ROUTES.PRODUCTS}`} element={<ProductList />} />
        <Route path={`/${ROUTES.PRODUCTS}/:id`} element={<ProductDetail />} />
        <Route path={`/${ROUTES.ADD_PRODUCT}`} element={<AddProduct />} />
        {/* </Route> */}

        {/* Redirect all other paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
