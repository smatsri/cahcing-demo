import MonthlyPaymentAd from './MonthlyPaymentAd';
import MonthlyPaymentPage from './MonthlyPaymentPage';

type MonthlyPaymentProps = {
  value: number;
  variant: 'ad' | 'page';
  onClick?: () => void;
};

const MonthlyPayment = (props: MonthlyPaymentProps) => {
  if (props.variant === 'ad') return <MonthlyPaymentAd {...props} />;
  return <MonthlyPaymentPage {...props} />;
};

export default MonthlyPayment;
