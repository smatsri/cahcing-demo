import { Benefit } from "../Price/types";

const Args = {
  MANUFACTURER_WARRANTY: ['warranty', 'MANUFACTURER_WARRANTY'],
  AGENCY_WARRANTY: ['warranty', 'AGENCY_WARRANTY'],
  CHASSIS: ['commitment_to_check', 'CHASSIS'],
  GEAR_ENGINE_CHASSIS: ['commitment_to_check', 'GEAR_ENGINE_CHASSIS'],
  FUTURE_TRADE_IN: ['tradein', 'FUTURE_TRADE_IN'],
  NEW_POST: ['warranty', 'NEW_POST'],
  NEW_POST_TITLE: ['shekel', 'NEW_POST_TITLE'],
  NEW_WITH_WARRANTY_MONTHS: ['warranty', 'NEW_WITH_WARRANTY_MONTHS'],
};

const getArgs = (benefit: Benefit): any[] | undefined => {
  switch (benefit.type) {
    case 'NEW_POST':
    case 'AGENCY_WARRANTY':
    case 'NEW_WITH_WARRANTY_MONTHS':
      return [...Args[benefit.type], { months: benefit.months }];

    default:
      return Args[benefit.type];
  }
};

/**
 * Maps a benefit to IconsProps object based on its type and localization function.
 *
 * @param benefit - The benefit object to map.
 * @param t - The localization function.
 * @returns An IconsProps object representing the mapped benefit, or null if mapping is not possible.
 */
export const mapToIconsProps = (
  benefit: Benefit,
  t: GetText,
): any => {
  const args = getArgs(benefit);
  if (!args) return null;

  const [type, benefitType, object] = args;
  return {
    type,
    title: t('benefit_title.' + benefitType, object),
    content: t('benefit_desc.' + benefitType, object),
  };
};

type GetText = (key: string, obj?: object) => string;
