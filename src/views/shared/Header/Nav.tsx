import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Nav () {
    return(
        <Container>
            <NavItem to={'/'}>home</NavItem>
            <NavItem to={'/cart'}>
                <Icon>
                    <AiOutlineShoppingCart/>
                </Icon>
            </NavItem>
        </Container>
    )
};

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
const NavItem = styled(Link)`
  padding: 10px 7px;
  margin-left: 20px;
  color: #000;
  text-decoration: none;
`;
const Icon = styled.div`
  font-size: 20px;
`;

export default Nav;
