import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Add from './pages/Add';
import Chart from './pages/Chart';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/add" element={<Add />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}

export default Routers;
