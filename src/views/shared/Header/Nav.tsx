import React from 'react';
import styled, {css} from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    qtyInCart : number
}

function Nav ({qtyInCart} : Props) {
    const navigate = useNavigate();

    const handleNavigator = (to : string) => {
        navigate(`${to}`)
    }

    return(
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit" onClick={() => handleNavigator('/')}>Home</Button>
                        <Button color="inherit" onClick={() => handleNavigator('/cart')}>Cart</Button>
                    </Toolbar>
                </AppBar>
            </Box>
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
const CartNavItem = styled(NavItemStyle)<{qtyInCart : number}>`
  ${(props) => (props?.qtyInCart > 0 ? css`
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
