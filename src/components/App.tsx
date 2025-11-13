import { useEffect } from 'react';
import './App.css'
import './i18n'

import { MemeBoard } from './MemeBoard';
import { miniApp, retrieveLaunchParams } from '@tma.js/sdk-react';
import { useTranslation } from 'react-i18next';
import { setUserId } from '@/client/backendClient';
import { Loading } from './Loading';

export function App() {
  miniApp.setBgColor("#1e1d23");
  miniApp.setHeaderColor("#1e1d23");
  miniApp.setBottomBarColor("#1e1d23");
  const { tgWebAppData } = retrieveLaunchParams();
  const { t, i18n } = useTranslation();

  const user = tgWebAppData?.user

  setUserId(user?.id!);

  useEffect(() => {
    console.log(user);
    setUserId(user?.id!);
    const lang = user?.language_code === "ru" ? "ru" : "en"
    if (i18n.language !== lang)
      i18n.changeLanguage(lang);
  }, [user, i18n])

  if (!user) {
    return <Loading text={t("Unable to log in")} />
  }

  return <div className="main-page">
    <MemeBoard />
  </div>
}
