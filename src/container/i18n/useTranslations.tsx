import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import ar from './data/ar';
import en from './data/en';

export default (locale?: "ar" | "en") => {
    const prop = (locale ?? useIntl().locale) as "ar" | "en";
    const translations = useAllTranslations();
    return translations[prop];
}

export const useAllTranslations = () => {
    return useMemo(() => ({ ar, en }), []);
}