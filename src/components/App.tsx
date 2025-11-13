import './App.css'

import { MemeBoard } from './MemeBoard';
import { miniApp } from '@tma.js/sdk-react';

export function App() {
  miniApp.setBgColor("#1e1d23");
  miniApp.setHeaderColor("#1e1d23");
  miniApp.setBottomBarColor("#1e1d23");
  return <div className="main-page">
    <MemeBoard />
  </div>
}
