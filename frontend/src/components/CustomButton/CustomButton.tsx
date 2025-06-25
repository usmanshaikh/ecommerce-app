import { Button } from '@mui/material';
import { type ButtonProps } from '@mui/material';
import './CustomButton.scss';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'fill' | 'white';
}

const CustomButton = ({ variantType = 'fill', className = '', ...props }: CustomButtonProps) => {
  const btnClass = variantType === 'white' ? 'white-btn' : 'fill-btn';
  return <Button fullWidth className={`${btnClass} ${className}`} {...props} />;
};

export default CustomButton;
