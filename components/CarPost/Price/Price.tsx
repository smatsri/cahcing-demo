import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import PriceValue from './PriceValue';

type PriceProps = {
  price: number;
  hasDiscount: boolean;
  variant: 'ad' | 'page';
};

const Price = (props: PriceProps) => {
  if (props.variant === 'ad') {
    return <PriceValue value={props.price} />;
  }
  return <PagePrice {...props} />;
};

const PagePrice = ({ price, hasDiscount }: PriceProps) => {
  const t = useTranslations();
  const label = useMemo(
    () => (hasDiscount ? t('priceAfterDiscount') : t('price')),
    [hasDiscount, t],
  );
  return (
    <Box>
      <PriceLabel noWrap>{label}</PriceLabel>
      <PriceValue value={price} />
    </Box>
  );
};

const PriceLabel = styled(Typography)`
  font-size: 13px;
`;

export default Price;
