import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Add from './pages/Add';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}

export default Routers;
