import styled from '@emotion/styled';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useTranslations } from 'next-intl';
import { buttonContainer } from '../styles';

type BenefitsSectionProps = {
  open?: boolean;
  onClick?: (e: any) => void;
  visible?: boolean;
};

const BenefitsButton = ({
  open = true,
  onClick,
  visible = true,
}: BenefitsSectionProps) => {
  const t = useTranslations();
  return (
    <Container onClick={onClick} visible={visible}>
      <Right>{t('post.benefits')}</Right>
      <IconContainer>{open ? Minus : Plus}</IconContainer>
    </Container>
  );
};

const Plus = <AddRoundedIcon sx={{ fontSize: '14px' }} />;
const Minus = <RemoveRoundedIcon sx={{ fontSize: '14px' }} />;

type ContainerProps = {
  visible: boolean;
};
const Container = styled(Button)<ContainerProps>`
  ${buttonContainer}
  padding: 2px 0 2px 10px;
  cursor: pointer;
  user-select: none;
  width: 100%;
  text-align: left;
  visibility: ${(p) => (p.visible ? 'visible' : 'hidden')};
`;

const Right = styled.div`
  flex-grow: 1;
  font-size: 13px;
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export default BenefitsButton;
