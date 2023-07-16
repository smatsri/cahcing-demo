import { AlertType } from "../Price/types";

export type AlertData = {
  alert: AlertType;
  title: string;
  icon: string;
  width: number;
  height: number;
  year?: number;
};
