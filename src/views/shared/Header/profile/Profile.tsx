import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { authDataAtom } from '../../../../atoms/authAtom';

function Profile() {
  const [authData, setAuthData] = useRecoilState(authDataAtom);
  return (
    <Container>
      <Image>
        <img src={authData.imageUrl} alt="" />
      </Image>
    </Container>
  );
}

const Container = styled.div`

`;
const Image = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
  }
`;
export default Profile;
