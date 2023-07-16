import AppThemeProvider from "@/app/AppThemeProvider";
import CarPost from "@/components/CarPost/CarPost";
import { CarPostAd } from "@/components/CarPost/Price/types";
import { MessagesProvider } from "@/components/shared/MessagesProvider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CarPost> = {
  title: "Car Post/CarPost",
  component: CarPost,
  decorators: [
    (Story) => (
      <AppThemeProvider>
        <MessagesProvider>
          <div style={{ marginTop: "50px" }}>
            <Story />
          </div>
        </MessagesProvider>
      </AppThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CarPost>;

const defPost: CarPostAd = {
  carId: "123",
  link: "http://localhost:",
  city: "ראשון לציון",
  title: " לנד רובר רינג' רובר ספורט ",
  finishLevel: "HSE DYNAMIC",
  specs: ["2020", "יד 1", "150,000 ק״מ"],
  price: 530000,
  hasDiscount: false,
  monthlyPayment: 7700,
  images: [
    "https://images.carwiz.co.il/staging/tr:h-220,w-364,fo-auto/media/87bd83c4-daad-475e-9c79-2de4410d95b1.jpg",
  ],
  alerts: [
    // { type: 'DISCOUNT', value: 2000 },
    // { type: 'LOW_KILOMETRAGE' },
    //{ type: 'ELECTRIC_CAR' },
    {
      type: "CAR_OF_THE_YEAR",
      category: "מכונית פאר",
      year: 2023,
    },
  ],
  benefits: [
    { type: "GEAR_ENGINE_CHASSIS" },
    { type: "MANUFACTURER_WARRANTY" },
    { type: "AGENCY_WARRANTY", months: 5 },
    { type: "CHASSIS" },
    { type: "FUTURE_TRADE_IN" },
    { type: "NEW_POST", months: 5 },
    { type: "NEW_POST_TITLE" },
    { type: "NEW_WITH_WARRANTY_MONTHS", months: 5 },
  ],
  insights: [
    {
      text: "רכב זה מותאם לתינוקות - הוא עומד בסטנדרט ISOFIX לחיבור כיסא תינוק, קיימת אפשרות לנטרל את כריות האוויר, ותא המטען בנפח של כ-584 ליטרים גדול מספיק בשביל עגלה",
      type: "baby_friendly",
      value: null,
    },
    {
      text: "רכב זה בעל מרכב סדאן. קיימות גרסאות נוספות של הדגם עם מרכב שדה",
      type: "body_options",
      value: "סדאן#שדה",
    },
    {
      text: "לרכב זה יש מנוע בנזין. קיימות גרסאות נוספות של הדגם עם מנוע דיזל",
      type: "fuel_type_options",
      value: "בנזין#דיזל",
    },
    {
      text: 'צריכת הדלק המשולבת של הרכב היא 17.5 ק"מ ליטר - חסכוני מהממוצע בשוק',
      type: "good_fuel_consumption",
      value: "true",
    },
    {
      text: "כמות הידיים שהרכב עבר נמוכה מאוד ביחס למקובל בשוק עבור השנתון שלו",
      type: "hands",
      value: "few",
    },
    {
      text: "רכב זה בעל הנעת 4X2. קיימות גרסאות נוספות של הדגם עם הנעת 4X4",
      type: "ignition_type_options",
      value: "4X2#4X4",
    },
  ],
};

export const Default: Story = {
  args: {
    post: defPost,
    isFav: true,
  },
};

export const LongTitle: Story = {
  args: {
    post: { ...defPost, title: "ג'יפ רנגלר 2D SPORT S ג'יפ רנגלר 2D SPORT S" },
    isFav: true,
  },
};
