import { Box } from '@mui/material';
import Images from '../../assets/img';

const Home = () => {
  return (
    <Box>
      <Box>
        <img src={Images.Banner} className="home-banner" alt="React logo" />
      </Box>
    </Box>
  );
};

export default Home;
