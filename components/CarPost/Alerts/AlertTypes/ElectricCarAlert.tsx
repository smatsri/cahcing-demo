import ElectricIconSvg from "@/images/icons/electric.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { alertStyle } from "../styles";

type ElectricCarAlertProps = {
  title: string;
};

const eletricAlertStyle = {
  ...alertStyle,
  height: "20px",
  padding: "0",
};

const ElectricCarAlert = ({ title }: ElectricCarAlertProps) => {
  const t = useTranslations();

  return (
    <Box sx={eletricAlertStyle}>
      <Container>
        <Image
          src={ElectricIconSvg.src}
          alt={t("post.alerts.electric")}
          width={10}
          height={18}
        />
      </Container>
      <span>{title}</span>
    </Box>
  );
};

export default ElectricCarAlert;

const Container = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
/* background-color: ${({ theme }) => theme.palette.colors.mainBlue}; */
