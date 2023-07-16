import BenefitsButton from "./BenefitsButton";
import { useCallback, useState } from "react";
import BenefitsList from "./BenefitsList";
// import BubblePopover from '@/shared-components/BubblePopover/BubblePopover';
import styled from "@emotion/styled";
import { preventDefault } from "../helpers";
import { Benefit } from "../Price/types";

type BenefitsSectionProps = {
  benefits: Benefit[];
  onOpen: () => void;
};

const BenefitsSection = ({ benefits, onOpen }: BenefitsSectionProps) => {
  const [open, setOpen] = useState(false);
  const visible = benefits.length > 0;
  const toggle = useCallback(() => {
    if (!visible) return;
    if (!open) onOpen();
    setOpen(!open);
  }, [open, onOpen, visible]);

  return (
    <Container>
      <BenefitsButton
        open={open}
        onClick={visible ? preventDefault(toggle) : () => {}}
        visible={visible}
      />
      <ListContainer>
        <BenefitsList benefits={benefits} />
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

/** popup container is used to position the popup */
const PopupConatiner = styled.div`
  position: absolute;
  top: -8px;
  left: 12px;
`;

const ListContainer = styled.div`
  margin-top: 10px;
`;

export default BenefitsSection;
