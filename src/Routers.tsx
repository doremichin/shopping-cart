import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

function Routers () {
    return(
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/detail/:id'} element={<Detail/>}/>
            </Routes>
    )
};

export default Routers;
