import * as React from 'react';
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
} from '@mui/material';
import { Menu as MenuIcon, PersonOutlineOutlined, ShoppingCartOutlined, FavoriteBorder } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import Images from '../../assets/img';
import './Header.scss';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Header = (props: Props) => {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleGoTo = (path: string) => {
    navigate(`/${path}`);
    handleCloseUserMenu();
  };

  const handleLogout = () => {
    navigate(`/${ROUTES.LOGIN}`);
    handleCloseUserMenu();
  };

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
                <img src={Images.Logo} className="header-logo" alt="logo" />
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
                <img src={Images.Logo} className="header-logo" alt="logo" />
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
              <Button
                sx={{ fontSize: 18, mx: 1, color: '#000000', display: 'block', fontWeight: 600 }}
                onClick={() => navigate(`/${ROUTES.ADD_PRODUCT}`)}>
                Add Product
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, mx: 1, color: '#000000' }}>
                <PersonOutlineOutlined />
              </IconButton>
              <IconButton onClick={() => navigate(`/${ROUTES.WISHLIST}`)} sx={{ p: 1, mx: 1, color: '#000000' }}>
                <FavoriteBorder />
              </IconButton>
              <IconButton onClick={() => navigate(`/${ROUTES.CART}`)} sx={{ p: 1, mx: 1, color: '#000000' }}>
                <ShoppingCartOutlined />
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
