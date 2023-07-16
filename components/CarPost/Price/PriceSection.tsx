import styled from '@emotion/styled';
import Price from './Price';
import MonthlyPayment from '../MonthlyPayment/MonthlyPayment';

type PriceSectionVariant = 'ad' | 'page';
type PriceSectionProps = {
  price: number;
  hasDiscount: boolean;
  monthlyPayment?: number;
  onFundingClick: () => void;
  variant: PriceSectionVariant;
};

const PriceSection = ({
  price,
  hasDiscount,
  monthlyPayment,
  variant,
  onFundingClick,
}: PriceSectionProps) => {
  const hasMonthlyPayment = !!monthlyPayment;
  return (
    <Container>
      <Price price={price} hasDiscount={hasDiscount} variant={'page'} />
      {hasMonthlyPayment && (
        <>
          <Seperator />
          <MonthlyPaymentWrapper>
            <MonthlyPayment
              value={monthlyPayment}
              variant={variant}
              onClick={onFundingClick}
            />
          </MonthlyPaymentWrapper>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Seperator = () => (
  <SeperatorContainer>
    <SeperatorLine />
  </SeperatorContainer>
);

const SeperatorContainer = styled.div`
  width: 2px;
  display: flex;
`;

const SeperatorLine = styled.div`
  flex: 1;
  height: 80%;
  background-color: #d9d9d9;
  align-self: center;
`;

const MonthlyPaymentWrapper = styled.div`
  flex: 1;
`;

export default PriceSection;
