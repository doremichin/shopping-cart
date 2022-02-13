import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { useGoogleLogout } from 'react-google-login';

import { authCheckerAtom, authDataAtom } from '../../../../atoms/authAtom';

function SignOut() {
  const [authCheck, setAuthCheck] = useRecoilState(authCheckerAtom);
  const resetAuthData = useResetRecoilState(authDataAtom);

  const onLogoutSuccess = () => {
    setAuthCheck(false);
    resetAuthData();
    sessionStorage.removeItem('profile');
  };
  const { signOut, loaded } = useGoogleLogout({
    clientId: '896627521201-rdfc3vn6jqjq858ac6qo904oiaa9oiqc.apps.googleusercontent.com',
    cookiePolicy: 'single_host_origin',
    onLogoutSuccess,
  });
  return (
    <Button color="inherit" onClick={signOut}>Logout</Button>

  );
}

const Container = styled.div`

`;

export default SignOut;
