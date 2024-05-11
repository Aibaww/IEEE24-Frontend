import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SettingsPage from './Components/settings-page';
import Newtab from './Newtab';
import GeneralPage from './Components/inprogress';
import './index.css';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
    <Routes>
      <Route path="/" element={<Newtab />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/newtab.html" element={<Newtab />} />
      <Route path="/TBD" element={<GeneralPage />} />
    
    </Routes>
  </Router>
);
