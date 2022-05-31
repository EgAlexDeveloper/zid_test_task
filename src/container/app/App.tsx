import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { flattenMessages, msgs } from '../i18n/translate';
import { changeLanguage } from '../../shared/redux/actions';
import { useSelector, useDispatch } from '../store';
import { AppState } from '../types';
import './App.scss';

import AppRoutes from '../routes';

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: AppState) => state.shared.language);
  // const identity = useSelector((state: AppState) => state.auth.identity);
  const currentMessages = language === "ar" ? flattenMessages(msgs.ar) : flattenMessages(msgs.en);

  useEffect(() => {
    let lang: any = "en";

    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
    }

    dispatch(changeLanguage(lang));
  }, []);

  return (
    <IntlProvider locale={language} messages={currentMessages}>
      <AppRoutes />
    </IntlProvider>
  );
};

export default App;
