import { useEffect } from 'react';
import './App.css'
import './i18n'

import { MemeBoard } from './MemeBoard';
import { miniApp, retrieveLaunchParams } from '@tma.js/sdk-react';
import { useTranslation } from 'react-i18next';

export function App() {
  miniApp.setBgColor("#1e1d23");
  miniApp.setHeaderColor("#1e1d23");
  miniApp.setBottomBarColor("#1e1d23");
  const { tgWebAppData } = retrieveLaunchParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(tgWebAppData?.user?.language_code === "ru" ? "ru" : "en");
  }, [])


  return <div className="main-page">
    <MemeBoard />
  </div>
}
