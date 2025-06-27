import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import CustomButton from '@components/CustomButton/CustomButton';
import './EmptyView.scss';

interface EmptyViewProps {
  title: string;
}

const EmptyView = ({ title = 'No Data' }: EmptyViewProps) => {
  const navigate = useNavigate();

  return (
    <Box className="empty-view-container">
      <img src="https://petify-storage.s3.eu-north-1.amazonaws.com/01-cat.png" className="img" alt="Cat And Dog" />
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
      <CustomButton variantType="fill" style={{ margin: 10, minWidth: 200 }} onClick={() => navigate(`/${ROUTES.PRODUCTS}`)}>
        Shop Now
      </CustomButton>
    </Box>
  );
};

export default EmptyView;
