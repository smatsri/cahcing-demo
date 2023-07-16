import { useMemo } from "react";
import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { mapToIconsProps } from "./helpers";
import { Benefit } from "../Price/types";

type BenefitsListProps = {
  benefits?: Benefit[];
};

const BenefitsList = ({ benefits = [] }: BenefitsListProps) => {
  const t = useTranslations();
  const items = useMemo(() => getItems(benefits, t), [benefits, t]);
  return <Container>{items}</Container>;
};

function getItems(benefits: Benefit[], t: any) {
  return benefits
    .map((benefit) => mapToIconsProps(benefit, t))
    .filter((a) => !!a)
    .map((props, i) => (
      <ItemWrapper key={i}>
        {/* <GenericTitleAndIcon
          title={props?.title}
          content={props?.content}
          type={props?.type}
        /> */}
      </ItemWrapper>
    ));
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ItemWrapper = styled.div`
  &:first-child {
    width: 80%;
  }
`;

export default BenefitsList;
