import React from 'react';
import styled from 'styled-components';

import Routers from './Routers';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/Header';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routers />
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
