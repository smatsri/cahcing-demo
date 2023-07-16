import { useTranslations } from 'next-intl';
import PriceValue from '../Price/PriceValue';
import styled from '@emotion/styled';
import OfferButton from './OfferButton';

type MonthlyPaymentAdProps = {
  value: number;
  onClick?: () => void;
};

const MonthlyPaymentPage = ({ value, onClick }: MonthlyPaymentAdProps) => {
  const t = useTranslations();
  return (
    <Container onClick={onClick}>
      <Right>
        <div>
          <SecondRow>{t('fundingOfferFrom')}</SecondRow>
          <FirstRow>
            <PriceValue value={value} />
            <div>{t('offer.fundingMonths')}</div>
          </FirstRow>
        </div>
      </Right>
      <div>
        <OfferButton onClick={onClick} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: #e0f1fb;
`;

const Right = styled.div`
  flex-grow: 1;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const SecondRow = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export default MonthlyPaymentPage;
