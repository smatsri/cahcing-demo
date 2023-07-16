import styled from "@emotion/styled";
import HeaderSection from "./Header/HeaderSection";
import PriceSection from "./Price/PriceSection";
import ImageSection from "./Image/ImageSection";
import Alerts from "./Alerts/Alerts";
import { AD_HEIGHT } from "./constants";
import BenefitsSection from "./Benefits/BenefitsSection";
import ButtonsSection from "./Buttons/ButtonsSection";
import Dani from "./Dani/Dani";
import CarPostFav from "./Fav/CarPostFav";
import { Box } from "@mui/material";
import { CarPostAd } from "./Price/types";
import { useMemo } from "react";

export type CarPostProps = {
  post?: CarPostAd;
  isFav?: boolean;
  hideBenefits?: boolean;
  priority?: boolean;
  onFundingClick: () => void;
  onDetailsClick: () => void;
  onContactClick: () => void;
  onFavChange: (value: boolean) => void;
  onPostClick: () => void;
  onInsightsClick: () => void;
  onBenefitsClick: () => void;
};

const CarPost = ({
  post,
  isFav = false,
  hideBenefits = false,
  priority,
  onFundingClick,
  onContactClick,
  onDetailsClick,
  onFavChange,
  onPostClick,
  onInsightsClick,
  onBenefitsClick,
}: CarPostProps) => {
  if (!post) return null;
  const {
    link,
    city,
    title,
    finishLevel,
    price,
    hasDiscount,
    monthlyPayment,
    images,
    specs = [],
    alerts = [],
    benefits = [],
    insights = [],
    parallelImport = false,
  } = post;

  /*
  the order of the elements
  determines the order of the tabing
  through the elements
  i wrap Dani CarPostFav Alerts with a Container
  to position then 
 */
  return (
    <>
      <Container onClick={onPostClick} hideBenefits={hideBenefits}>
        <Box>
          <FavContainer>
            <CarPostFav isFav={isFav} title={title} onChange={onFavChange} />
          </FavContainer>
          {insights.length > 0 ? (
            <DaniContainer>
              <Dani insights={insights} onClick={onInsightsClick} />
            </DaniContainer>
          ) : null}
          <BoxContainer>
            <ImageSection images={images} priority={priority} alt={title} />
            <MainContainer>
              <HeaderSection
                city={city}
                title={title}
                finishLevel={finishLevel}
                specs={specs}
                parallelImport={parallelImport}
                onClick={onPostClick}
              />
              <PriceSection
                price={price}
                hasDiscount={hasDiscount}
                onFundingClick={onFundingClick}
                monthlyPayment={monthlyPayment}
                variant="ad"
              />
              {!hideBenefits ? (
                <BenefitsSection benefits={benefits} onOpen={onBenefitsClick} />
              ) : null}
              <ButtonsSection
                carTitle={title}
                detailsLink={link}
                onContactClick={onContactClick}
                onDetailsClick={onDetailsClick}
              />
            </MainContainer>
          </BoxContainer>
          <AlertContainer>
            <Alerts alerts={alerts} />
          </AlertContainer>
        </Box>
      </Container>
    </>
  );
};

const Container = styled.div<{ hideBenefits: boolean }>`
  display: flex;
  cursor: pointer;

  > div {
    display: flex;
    position: relative;
    width: 100%;
  }
`;

const BoxContainer = styled.div`
  flex: 1;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

const MainContainer = styled.div`
  padding: 10px 13px 15px 13px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AlertContainer = styled.div`
  position: absolute;
  top: 188px;
`;

const DaniContainer = styled.div`
  position: absolute;
  top: 184px;
  right: 0;
`;

const FavContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export default CarPost;
