import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { toAlertData } from "./helpers";
import { AlertData } from "./types";
import GenericAlert from "./AlertTypes/GenericAlert";
import CarOfTheYearAlert from "./AlertTypes/CarOfTheYearAlert";
import { alertsSectionWrapper } from "./styles";
import ElectricCarAlert from "./AlertTypes/ElectricCarAlert";
import FlashSaleAlert from "./AlertTypes/FlashSaleAlert";
import { AlertType } from "../Price/types";

export type AlertsSectionProps = {
  alerts: AlertType[];
};

const Alerts = ({ alerts }: AlertsSectionProps) => {
  const t = useTranslations();

  const alertsData = useMemo<AlertData[]>(
    () => alerts.map(toAlertData(t)),
    [alerts, t]
  );

  if (alertsData.length === 0) return null;

  return (
    <Box sx={alertsSectionWrapper}>
      {alertsData.map((data) => {
        if (data.alert.type === "FLASH_SALE") {
          return <FlashSaleAlert key={data.alert.type} {...data} />;
        } else if (data.alert.type === "CAR_OF_THE_YEAR") {
          return <CarOfTheYearAlert key={data.alert.type} {...data} />;
        } else if (data.alert.type === "ELECTRIC_CAR") {
          return <ElectricCarAlert key={data.alert.type} title={data.title} />;
        }
        return <GenericAlert key={data.alert.type} {...data} />;
      })}
    </Box>
  );
};

export default Alerts;
