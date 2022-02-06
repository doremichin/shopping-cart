import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav";
import {useRecoilValue} from "recoil";
import {cartState} from "../../../atoms/cartAtom";

function Header () {

    const cartData = useRecoilValue(cartState)
    const qtyInCart = cartData.length
    return(
        <Container>
            <Logo>logo</Logo>
            <Nav qtyInCart={qtyInCart}/>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow:  1px 1px 10px #ddd;
`;
const Logo = styled.div`
  
`;


export default Header;
