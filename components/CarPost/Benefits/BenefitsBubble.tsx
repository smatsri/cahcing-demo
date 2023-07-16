import styled from '@emotion/styled';
import TopBg from '@/images/bubble/top.png';
import MiddleBg from '@/images/bubble/middle.png';
import BottomBg from '@/images/bubble/bottom.png';
import PointerBg from '@/images/bubble/pointer.png';

type BenefitsBubbleProps = {
  children: any;
};

const BenefitsBubble = ({ children }: BenefitsBubbleProps) => {
  return (
    <Container>
      <BubbleBox>
        <Top />
        <Content>{children}</Content>
        <Bottom />
      </BubbleBox>
      <Pointer />
    </Container>
  );
};

const Container = styled.div`
  width: 348px;
  position: relative;
`;

const BubbleBox = styled.div`
  position: relative;
  z-index: 0;
`;

const Pointer = styled.div`
  background-image: url(${PointerBg.src});
  background-repeat: no-repeat;
  position: absolute;
  top: 23px;
  height: 100px;
  width: 100%;
  z-index: 1;
`;

const Top = styled.div`
  display: block;
  height: 31px;
  background-image: url(${TopBg.src});
  background-repeat: no-repeat;
`;

const Content = styled.div`
  background-image: url(${MiddleBg.src});
  background-repeat: repeat-y;
  min-height: 54px;
  padding: 0px 51px 0px 35px;
`;
const Bottom = styled.div`
  display: block;
  height: 50px;
  background-image: url(${BottomBg.src});
  background-repeat: no-repeat;
`;

export default BenefitsBubble;
