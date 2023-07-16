import { useTranslations } from 'next-intl';
import PriceValue from '../Price/PriceValue';
import styled from '@emotion/styled';
import { buttonContainer } from '../styles';
import Button from '@mui/material/Button';
import { ArrowBackIosRounded } from '@mui/icons-material';
import { preventDefault } from '../helpers';

type MonthlyPaymentAdProps = {
  value: number;
  onClick?: () => void;
};

const MonthlyPaymentAd = ({ value, onClick }: MonthlyPaymentAdProps) => {
  const t = useTranslations();
  return (
    <Container onClick={preventDefault(onClick)}>
      <Right>
        <Rows>
          <FirstRow>
            <PriceValue value={value} />
            <DownPayment>{t('downPayment')}</DownPayment>
          </FirstRow>
          <SecondRow>{t('toFundingOffer')}</SecondRow>
        </Rows>
      </Right>
      <IconContainer>
        <ArrowBackIosRounded sx={{ fontSize: '12px' }} />
      </IconContainer>
    </Container>
  );
};

const Container = styled(Button)`
  ${buttonContainer}
  padding: 4px 0px 4px 12px;
  cursor: pointer;
  user-select: none;
  width: 100%;
  text-align: left;
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
  font-size: 14px;
  font-weight: bold;
`;

const Rows = styled.div`
  line-height: 18px;
`;

const IconContainer = styled.div`
  margin-right: 8px;
`;

const DownPayment = styled.div`
  font-weight: 300;
`;

export default MonthlyPaymentAd;
