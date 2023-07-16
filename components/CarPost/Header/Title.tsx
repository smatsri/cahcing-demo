import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import ParallelImport from "./ParallelImport";

type TitleProps = {
  title: string;
  finishLevel: string;
  fontSize?: string;
  finishLevelFontSize?: string;
  parallelImport?: boolean;
  verticalLayout?: boolean;
};

type StyledProps = {
  fontSize: string;
  verticalLayout?: boolean;
};

const Title = ({
  title,
  finishLevel,
  fontSize,
  finishLevelFontSize,
  parallelImport,
  verticalLayout = false,
}: TitleProps) => {
  return (
    <Container fontSize={fontSize || ""} verticalLayout={verticalLayout}>
      {parallelImport ? <ParallelImport /> : null}
      <TitleTypography
        variant="h2"
        fontSize={fontSize || ""}
        noWrap={!verticalLayout}
      >
        {title}
      </TitleTypography>
      <Typography
        fontSize={finishLevelFontSize || fontSize || "13px"}
        noWrap={!verticalLayout}
      >
        {finishLevel}
      </Typography>
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${(props) => (props.verticalLayout ? "column" : "row")};
  align-items: ${(props) => (props.verticalLayout ? "start" : "center")};
  font-size: ${(props) => props.fontSize || "16px"};
  gap: 5px;
  text-decoration: none;
  margin-top: 5px;
`;

const TitleTypography = styled(Typography)<StyledProps>`
  margin: 0;
  font-size: ${(props) => props.fontSize || "16px"};
`;

export default Title;
