import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Cart from "./pages/Cart";

function Routers () {
    return(
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
            </Routes>
    )
};

export default Routers;
