export interface CarPostAd {
  carId: string;
  link: string;
  city: string;
  title: string;
  finishLevel: string;
  specs: string[];
  price: number;
  hasDiscount: boolean;
  monthlyPayment?: number;
  images: string[];
  alerts?: AlertType[];
  benefits?: Benefit[];
  insights?: Insight[];
  parallelImport?: boolean;
}

export interface BannerUrl {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
  blurDataURL?: string;
}

export type Rate = {
  currentRate: string;
  vehicleAgeInYears: string;
  id: number;
};

export type DiscountAlert = { type: 'DISCOUNT'; value: number }; // תגית הנחה
export type LowKilometrageAlert = { type: 'LOW_KILOMETRAGE' }; // ק"מ נמוך במיוחד
export type ElectricCarAlert = { type: 'ELECTRIC_CAR' }; // רכב חשמלי
export type ImmediatDelivery = { type: 'IMMEDIATE_DELIVERY' }; // אספקה מיידית
export type CarOfTheYear = {
  type: 'CAR_OF_THE_YEAR';
  category: string;
  year: number;
}; // מכונית השנה
export type FlashSaleAlert = { type: 'FLASH_SALE'; value: number }; // פלאש סייל

export type AlertType =
  | FlashSaleAlert
  | CarOfTheYear
  | DiscountAlert
  | LowKilometrageAlert
  | ElectricCarAlert
  | ImmediatDelivery;


export type B<T extends string> = { type: T };
export type Month = {
  months: number;
};
export type Benefit =
  | B<'MANUFACTURER_WARRANTY'>
  | (B<'AGENCY_WARRANTY'> & Month)
  | B<'CHASSIS'>
  | B<'GEAR_ENGINE_CHASSIS'>
  | B<'FUTURE_TRADE_IN'>
  | (B<'NEW_POST'> & Month)
  | B<'NEW_POST_TITLE'>
  | (B<'NEW_WITH_WARRANTY_MONTHS'> & Month);

type InsightType =
  | 'baby_friendly'
  | 'fuel_type_options'
  | 'good_fuel_consumption'
  | 'km'
  | 'large_cargo'
  | 'pollution'
  | 'safety_systems'
  | 'popularity'
  | 'off_road'
  | 'max_safety_equipment_in_category'
  | 'hands'
  | 'max_airbags_count_in_category'
  | 'body_options'
  | 'ignition_type_options'
  | 'luxurious'
  | 'only_one_type_of_gear'
  | 'award_winning'
  | 'seats_options'
  | 'gear_different_from_majority'
  | 'commitment_to_check'
  | 'warranty'
  | 'tradein';

export interface Insight {
  type: InsightType;
  text: string;
  value: string | null | undefined;
}  