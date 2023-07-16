import styled from "@emotion/styled";

import DanyButton from "./DanyButton";
import { useState } from "react";

import { preventDefault } from "../helpers";
import { Insight } from "../Price/types";

type DaniProps = {
  insights: Insight[];
  onClick: () => void;
};

const Dani = ({ insights, onClick }: DaniProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Container onClick={preventDefault(onClick)}>
      <DanyButton count={insights.length} onClick={toggle} disabled={open} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
`;

export default Dani;
