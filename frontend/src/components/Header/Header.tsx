import { useEffect, useState, type MouseEvent } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Badge,
} from '@mui/material';
import { Menu as MenuIcon, PersonOutlineOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import type { RootState } from '@store';
import { useAppDispatch, useAppSelector } from '@hooks';
import { authApi, cartApi } from '@api';
import { clearCartCount, clearTokens, setCartCount } from '@store/slices';
import CustomButton from '../CustomButton/CustomButton';
import './Header.scss';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Header = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);
  const { count: cartCount } = useAppSelector((state: RootState) => state.cart);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleGoTo = (path: string) => {
    navigate(`/${path}`);
    handleCloseUserMenu();
  };

  const handleLogout = async () => {
    handleCloseUserMenu();
    try {
      const refreshToken = localStorage.getItem('refreshToken') as string;
      if (refreshToken) await authApi.logout({ refreshToken });
    } finally {
      dispatch(clearTokens());
      dispatch(clearCartCount());
      navigate(`/${ROUTES.LOGIN}`);
    }
  };

  const getCartCount = async () => {
    const cartRes = await cartApi.getCart();
    const items = cartRes.data.data;
    const count = items.reduce((total: number, item: any) => total + item.quantity, 0);
    dispatch(setCartCount(count));
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        getCartCount();
      }, 500);
    }
  }, [isLoggedIn]);

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={`/${ROUTES.PRODUCTS}`} sx={{ textAlign: 'center' }}>
            <ListItemText primary="Shop" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout} sx={{ textAlign: 'center' }}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} className="header-container">
      <AppBar color="transparent" position="fixed" className="header-app-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link to="/">
                <img src="https://petify-storage.s3.eu-north-1.amazonaws.com/logo.png" className="header-logo" alt="logo" />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ mr: 2, display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }}>
              <Link to="/">
                <img src="https://petify-storage.s3.eu-north-1.amazonaws.com/logo.png" className="header-logo" alt="logo" />
              </Link>
            </Box>
            <Box sx={{ ml: 3, flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <Button
                sx={{ fontSize: 18, mx: 1, color: '#000000', display: 'block', fontWeight: 600 }}
                onClick={() => navigate('/')}>
                Home
              </Button>
              <Button
                sx={{ fontSize: 18, mx: 1, color: '#000000', display: 'block', fontWeight: 600 }}
                onClick={() => navigate(`/${ROUTES.PRODUCTS}`)}>
                Shop
              </Button>
              {/* <Button
                sx={{ fontSize: 18, mx: 1, color: '#000000', display: 'block', fontWeight: 600 }}
                onClick={() => navigate(`/${ROUTES.ADD_PRODUCT}`)}>
                Add Product
              </Button> */}
            </Box>
            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              {isLoggedIn ? (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, mx: 1, color: '#000000' }}>
                  <PersonOutlineOutlined />
                </IconButton>
              ) : (
                <CustomButton variantType="white" sx={{ p: 0, mr: 5 }} onClick={() => navigate(`/${ROUTES.LOGIN}`)}>
                  Login
                </CustomButton>
              )}
              {/* TODO: Implement wishlist functionality */}
              {/* <IconButton onClick={() => navigate(`/${ROUTES.WISHLIST}`)} sx={{ p: 1, mx: 1, color: '#000000' }}>
                <Badge badgeContent={wishlistCount} color="error">
                  <FavoriteBorder />
                </Badge>
              </IconButton> */}
              <IconButton onClick={() => navigate(`/${ROUTES.CART}`)} sx={{ p: 1, mx: 1, color: '#000000' }}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                <MenuItem onClick={() => handleGoTo(ROUTES.PROFILE)}>
                  <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleGoTo(ROUTES.ORDERS)}>
                  <Typography sx={{ textAlign: 'center' }}>Orders</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
export default Header;
