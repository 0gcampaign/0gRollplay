import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Play from '../../pages/Play';
import NotFoundPage from '../../pages/NotFoundPage';
import ConnectWallet from '../../pages/ConnectWallet';
import Landing from '../../pages/Landing';


const AppRoutes = () => {

  useEffect(() => {
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/connect" element={<ConnectWallet />} />
      <Route path="/play" element={<Play />} />
      <Route path="/register" element={<Play />} /> 
      <Route path="/login" element={<Play />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
