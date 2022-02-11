import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useGoogleLogin } from 'react-google-login';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { authCheckerAtom, authDataAtom } from '../../../../atoms/authAtom';

function SignIn() {
  const [authCheck, setAuthCheck] = useRecoilState(authCheckerAtom);
  const setAuthData = useSetRecoilState(authDataAtom);
  const onSuccess = (res : any) => {
    const profile = res.profileObj;
    setAuthCheck(true);
    setAuthData(profile);
  };
  const onFailure = (err :any) => {
    throw Error(err);
  };
  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    clientId: '896627521201-rdfc3vn6jqjq858ac6qo904oiaa9oiqc.apps.googleusercontent.com',
    cookiePolicy: 'single_host_origin',
    isSignedIn: true,
    onFailure,
  });
  return (
    <Button color="inherit" onClick={signIn}>Login</Button>
  );
}

const Container = styled.div`

`;

export default SignIn;
