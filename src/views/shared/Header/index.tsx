import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { cartState } from '../../../atoms/cartAtom';
import { authCheckerAtom } from '../../../atoms/authAtom';
import SignIn from './sign/SignIn';
import SignOut from './sign/SignOut';
import Profile from './profile/Profile';

function Header() {
  const [authCheck, setAuthCheck] = useRecoilState(authCheckerAtom);

  const navigate = useNavigate();
  const cartData = useRecoilValue(cartState);
  const qtyInCart = cartData.length;
  const handleNavigator = (to : string) => {
    navigate(`${to}`);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: '#1188ff' }}>
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
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => handleNavigator('/')}
            >
              Cart-App
            </Typography>
            {
              authCheck && <Profile />
            }
            {
              authCheck ? <SignOut /> : <SignIn />
            }
            <Button color="inherit" onClick={() => handleNavigator('/')}>Home</Button>
            <Button color="inherit" onClick={() => handleNavigator('/cart')}>
              <Badge badgeContent={qtyInCart} color="secondary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}

const Container = styled.div`
    
`;

export default Header;
