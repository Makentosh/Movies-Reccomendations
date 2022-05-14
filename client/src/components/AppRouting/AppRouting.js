import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import SettingsPage from '../../pages/Settings';
import Home from '../../pages/Home';
import Recommend from '../../pages/Recommend';

const AppRouting = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> }>
          <Route index element={ <Home/> }/>
          <Route path="settings" element={ <SettingsPage/> }/>
          <Route path="recommend" element={ <Recommend/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
