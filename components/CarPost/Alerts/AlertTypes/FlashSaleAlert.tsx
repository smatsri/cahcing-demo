import IconSvg from '@/images/icons/flashsale-icon.svg';
import FlashSaleSvg from '@/images/icons/flashsale.svg';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { alertStyle, dividerStyle } from '../styles';
import { AlertData } from '../types';

const FlashSaleAlert = ({ title }: AlertData) => {
  return (
    <Box sx={alertStyle}>
      <Box
        sx={{
          position: 'absolute',
          left: -14,
          top: -15,
          display: 'flex',
        }}
      >
        <Image width={49} height={53} src={IconSvg.src} alt={title} />
      </Box>
      <Box
        sx={{
          ml: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 20,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image
            src={FlashSaleSvg.src}
            aria-label={title}
            alt={''}
            width={93}
            height={20}
            layout="fixed"
          />
        </Box>

        <Divider sx={dividerStyle} orientation="vertical" />
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default FlashSaleAlert;
