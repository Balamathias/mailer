import { VariationID } from "./types"

export const dataPlans: { [key: string]: string } = {
    '500': 'MTN SME Data 500MB – 30 Days',
    'M1024': 'MTN SME Data 1GB – 30 Days',
    'M2024': 'MTN SME Data 2GB – 30 Days',
    '3000': 'MTN SME Data 3GB – 30 Days',
    '5000': 'MTN SME Data 5GB – 30 Days',
    '10000': 'MTN SME Data 10GB – 30 Days',
    'mtn-20hrs-1500': 'MTN Data 6GB – 7 Days',
    'mtn-30gb-8000': 'MTN Data 30GB – 30 Days',
    'mtn-40gb-10000': 'MTN Data 40GB – 30 Days',
    'mtn-75gb-15000': 'MTN Data 75GB – 30 Days',
    'glo100x': 'Glo Data 1GB – 5 Nights',
    'glo200x': 'Glo Data 1.25GB – 1 Day (Sunday)',
    'G500': 'Glo Data 1.35GB – 14 Days',
    'G2000': 'Glo Data 5.8GB – 30 Days',
    'G1000': 'Glo Data 2.9GB – 30 Days',
    'G2500': 'Glo Data 7.7GB – 30 Days',
    'G3000': 'Glo Data 10GB – 30 Days',
    'G4000': 'Glo Data 13.25GB – 30 Days',
    'G5000': 'Glo Data 18.25GB – 30 Days',
    'G8000': 'Glo Data 29.5GB – 30 Days',
    'glo10000': 'Glo Data 50GB – 30 Days',
    'AIRTEL500MB': 'Airtel Data 500MB (Gift) – 30 Days',
    'AIRTEL1GB': 'Airtel Data 1GB (Gift) – 30 Days',
    'AIRTEL2GB': 'Airtel Data 2GB (Gift)– 30 Days',
    'AIRTEL5GB': 'Airtel Data 5GB (Gift)– 30 Days',
    'AIRTEL10GB': 'Airtel Data 10GB (Gift)– 30 Days',
    'AIRTEL15GB': 'Airtel Data 15GB (Gift)– 30 Days',
    'AIRTEL20GB': 'Airtel Data 20GB (Gift)– 30 Days',
    'airt-1100': 'Airtel Data 1.5GB – 30 Days',
    'airt-1300': 'Airtel Data 2GB – 30 Days',
    'airt-1650': 'Airtel Data 3GB – 30 Days',
    'airt-2200': 'Airtel Data 4.5GB – 30 Days',
    'airt-3300': 'Airtel Data 10GB – 30 Days',
    'airt-5500': 'Airtel Data 20GB – 30 Days',
    'airt-11000': 'Airtel Data 40GB – 30 Days',
    'airt-330x': 'Airtel Data 1GB – 1 Day',
    'airt-550': 'Airtel Data 750MB – 14 Days',
    'airt-1650-2': 'Airtel Data 6GB – 7 Days',
    '9MOB1000': '9mobile Data 1GB – 30 Days',
    '9MOB34500': '9mobile Data 2.5GB – 30 Days',
    '9MOB8000': '9mobile Data 11.5GB – 30 Days',
    '9MOB5000': '9mobile Data 15GB – 30 Days'
}
  
export const getPlanName = (variationId: VariationID) => dataPlans[variationId];

export const getVarationId = (planName: string) => Object.keys(dataPlans).find(key => dataPlans[key] === planName)

export const filterPlans = (prefix: 'Glo' | 'MTN' | 'Airtel' | '9mobile') => {
    const values = Object.values(dataPlans).filter(plan => plan.startsWith(prefix));
    const newObject: { [key: string]: string } = Object.fromEntries(values.map(plan => [getVarationId(plan), plan]));
    return newObject
}
