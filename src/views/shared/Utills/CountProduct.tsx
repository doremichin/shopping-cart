import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../../../interfaces/interface.Product';
import { useCountQty } from '../../../hooks/useCountQty';

interface Props {
    item : IProduct

}
function CountProduct({ item } : Props) {
  const countQty = useCountQty();

  return (
    <Container>
      <Add onClick={() => countQty(item.id, 'add')}>+</Add>
      <Qty>{item.qty}</Qty>
      <Sub onClick={() => countQty(item.id, 'sub')}>-</Sub>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Add = styled(Button)`
  
`;
const Sub = styled(Button)`
  
`;
const Qty = styled.div`
  margin: 0 8px;
`;
export default CountProduct;
