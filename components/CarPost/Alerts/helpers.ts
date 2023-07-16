import { useTranslations } from 'next-intl';
import { AlertData } from './types';
import { AlertType } from '../Price/types';

export const createAlertData = (
  alert: AlertType,
  title: string,
  icon: string,
  width: number,
  height: number,
  year?: number,
): AlertData => ({
  alert,
  title,
  icon,
  width,
  height,
  year,
});

export const toAlertData =
  (t: ReturnType<typeof useTranslations>) =>
    (alert: AlertType): AlertData => {
      switch (alert.type) {
        case 'CAR_OF_THE_YEAR':
          return createAlertData(
            alert,
            alert.category,
            'icons/caroftheyear.svg',
            36,
            46,
            alert.year,
          );
        case 'ELECTRIC_CAR':
          return createAlertData(
            alert,
            t('post.alerts.electric'),
            'icons/alerts/electric.svg',
            12,
            19,
          );

        case 'IMMEDIATE_DELIVERY':
          return createAlertData(
            alert,
            t('post.alerts.immediate_delivery'),
            'icons/alerts/immediate-delivery.svg',
            20,
            20,
          );

        case 'DISCOUNT':
          return createAlertData(
            alert,
            `${t('post.alerts.discountAmount')} ${alert.value} ₪`,
            'icons/alerts/discount.svg',
            9,
            21,
          );

        case 'FLASH_SALE':
          return createAlertData(
            alert,
            t('post.alerts.flashsale', { price: alert.value.toLocaleString() }),
            '',
            0,
            0,
          );

        default:
          return createAlertData(
            alert,
            `${t('post.alerts.lowKilometrage')}`,
            'icons/alerts/low_kilometrage.svg',
            26.2,
            14,
          );
      }
    };
