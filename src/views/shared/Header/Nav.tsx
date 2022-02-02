import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface Props {
    qty : number
}

function Nav ({qty} : Props) {
    return(
        <Container>
            <NavItem to={'/'}>home</NavItem>
            <CartNavItem to={'/cart'} qty={qty}>
                <Icon>
                    <AiOutlineShoppingCart/>
                </Icon>
            </CartNavItem>
        </Container>
    )
};

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
export const NavItemStyle = styled(Link)`
  position: relative;
  padding: 10px 7px;
  margin-left: 20px;
  color: #000;
  text-decoration: none;
`;
const NavItem = styled(NavItemStyle)`
    
`;
const CartNavItem = styled(NavItemStyle)<{qty : number}>`
  ${(props) => (props?.qty > 0 ? css`
    &::after{
      content: '';
      position: absolute;
      top: 8px;
      right: 3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color:red;
    }
  ` : css`
  
  `)}

`;
const Icon = styled.div`
  font-size: 20px;
`;

export default Nav;
