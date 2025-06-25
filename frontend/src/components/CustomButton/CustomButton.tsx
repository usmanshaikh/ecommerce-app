import { Button } from '@mui/material';
import { type ButtonProps } from '@mui/material';
import './CustomButton.scss';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'fill' | 'white';
}

const CustomButton = ({ variantType = 'fill', className = '', fullWidth, ...props }: CustomButtonProps) => {
  const btnClass = variantType === 'white' ? 'white-btn' : 'fill-btn';

  return <Button {...props} className={`${btnClass} ${className}`} {...(fullWidth && { fullWidth })} />;
};

export default CustomButton;
