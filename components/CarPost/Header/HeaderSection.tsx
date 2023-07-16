import styled from "@emotion/styled";
import Location from "./Location";
import Specs from "./Specs";
import Title from "./Title";

type HeaderSectionProps = {
  city: string;
  title: string;
  finishLevel: string;
  specs: string[];
  parallelImport?: boolean;
  onClick: () => void;
};

const HeaderSection = ({
  city,
  title,
  finishLevel,
  specs,
  parallelImport = false,
  onClick,
}: HeaderSectionProps) => {
  return (
    <Container>
      <Location city={city} />
      <Title
        title={title}
        finishLevel={finishLevel}
        fontSize="16px"
        finishLevelFontSize="13px"
        parallelImport={parallelImport}
      />
      <Specs items={specs} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HeaderSection;
