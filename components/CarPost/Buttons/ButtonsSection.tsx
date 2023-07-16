import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { preventDefault } from "../helpers";
import { Button } from "@mui/material";

type ButtonsSectionProps = {
  carTitle: string;
  detailsLink: string;
  onContactClick?: () => void;
  onDetailsClick?: () => void;
};

const ButtonsSection = ({
  carTitle,
  detailsLink,
  onContactClick,
  onDetailsClick,
}: ButtonsSectionProps) => {
  const t = useTranslations();

  return (
    <Container>
      <Button
        onClick={preventDefault(onContactClick)}
        aria-label={`יצירת קשר לגבי רכב ${carTitle}`}
        variant="contained"
      >
        {t("post.contact")}
      </Button>
      <Button
        onClick={preventDefault(onDetailsClick)}
        variant={"outlined"}
        aria-label={`מעניין אותי רכב ${carTitle}`}
      >
        {t("post.imInterested")}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export default ButtonsSection;
