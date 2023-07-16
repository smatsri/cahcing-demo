import styled from '@emotion/styled';
import { useMemo } from 'react';

type PriceValueProps = {
  value: number;
};

const PriceValue = ({ value }: PriceValueProps) => {
  const txt = useMemo(() => value.toLocaleString(), [value]);
  return (
    <Container>
      <PriceText>{txt}</PriceText>
      <NIS />
    </Container>
  );
};

const Container = styled.div`
  font-weight: bold;
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

const PriceText = styled.div`
  font-size: 18px;
`;

const NISContainer = styled.div`
  font-size: 14px;
`;

const NIS = () => {
  return <NISContainer>₪</NISContainer>;
};

export default PriceValue;
