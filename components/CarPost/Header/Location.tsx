import Image from "next/image";
import styled from "@emotion/styled";

type LocationProps = {
  city: string;
  fontSize?: string;
};

const Location = ({ city, fontSize = "13px" }: LocationProps) => {
  return (
    <Container>
      <LocationIcon />
      <Title fontSize={fontSize}>{city}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const LocationIcon = () => {
  return (
    <Image src="/images/icons/location.svg" alt="Icon" width={18} height={20} />
  );
};

const Title = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin-left: 5px;
`;

export default Location;
