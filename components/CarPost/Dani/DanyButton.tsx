import DaniSvg from "@/images/icons/dani.svg";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";

type DanyButtonProps = {
  count: number;
  disabled?: boolean;
  onClick: () => void;
};

const DanyButton = ({ count, onClick, disabled = false }: DanyButtonProps) => {
  return (
    <Container onClick={onClick} disabled={disabled}>
      <Image src={DaniSvg.src} alt="" width="70" height="72" />
      <Count>{count}</Count>
    </Container>
  );
};

const Container = styled(Button)`
  position: relative;
  min-width: auto;
  padding: 0;
  border-radius: 50%;
`;

const Count = styled.div`
  position: absolute;
  top: 6px;
  left: 12px;
  color: white;
  text-align: center;
  width: 19px;
  font-size: 13px;
`;

export default DanyButton;
