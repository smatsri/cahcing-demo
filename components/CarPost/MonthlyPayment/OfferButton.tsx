import styled from '@emotion/styled';
import { ArrowBackIosRounded } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { preventDefault } from '../helpers';

const OfferButtonContainer = styled(Button)`
  min-width: auto;
`;

const OfferButton = ({ onClick }: { onClick?: () => void }) => (
  <OfferButtonContainer onClick={preventDefault(onClick)}>
    <ArrowBackIosRounded sx={{ fontSize: '14px' }} />
  </OfferButtonContainer>
);

export default OfferButton;
