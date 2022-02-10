import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../../../interfaces/interface.Product';

interface Props {
    data : IProduct[]
    children(item : IProduct) : JSX.Element
}

function CartList({ children, data } : Props) {
  return (
    <Container>
      <Col>
        {
          data.map((item) => children(item))
        }
      </Col>
    </Container>
  );
}

const Container = styled.div`

`;
const Col = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

export default CartList;
