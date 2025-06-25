import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Instagram, Pinterest, FacebookOutlined } from '@mui/icons-material';
import { Grid, Container, Box } from '@mui/material';
import Images from '../../assets/img';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Box className="footer-top section">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Box className="footer-brand">
                  <Link to="/">
                    <img src={Images.Logo} className="footer-logo" alt="logo" />
                  </Link>

                  <p className="footer-text">
                    If you have any question, please contact us at
                    <br />
                    <a href="mailto:support@petify.com" className="mailto-link">
                      support@petify.com
                    </a>
                  </p>

                  <ul className="social-list">
                    <li>
                      <Link to="/">
                        <IconButton sx={{ p: 1, mx: 1, color: '#000000', backgroundColor: '#ffffff' }}>
                          <FacebookOutlined />
                        </IconButton>
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <IconButton sx={{ p: 1, mx: 1, color: '#000000', backgroundColor: '#ffffff' }}>
                          <Instagram />
                        </IconButton>
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <IconButton sx={{ p: 1, mx: 1, color: '#000000', backgroundColor: '#ffffff' }}>
                          <Pinterest />
                        </IconButton>
                      </Link>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Box>
                <ul className="footer-list">
                  <li>
                    <p className="footer-list-title">Corporate</p>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Vendors
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Affiliate Program
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Box>
                <ul className="footer-list">
                  <li>
                    <p className="footer-list-title">Information</p>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Online Store
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Refund Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Shipping Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Terms of Service
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Track Order
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Box>
                <ul className="footer-list">
                  <li>
                    <p className="footer-list-title">Services</p>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Grooming
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Positive Dog Training
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Veterinary Services
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Petco Insurance
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Pet Adoption
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="footer-link">
                      Resource Center
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="footer-bottom">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <p className="copyright">
                &copy; 2025 Made with ♥ by{' '}
                <a href="https://github.com/usmanshaikh" target="_blank" className="copyright-link">
                  Usman Shaikh.
                </a>
              </p>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} justifyContent={'flex-end'} display="flex">
              <img src={Images.Payment} width="397" height="32" loading="lazy" alt="payment method" className="img" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
