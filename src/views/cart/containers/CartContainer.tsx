import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { cartState } from '../../../atoms/cartAtom';
import CartItem from '../components/CartItem';
import CartList from '../components/CartList';
import TotalAmount from '../components/TotalAmount';

function CartContainer() {
  const [cartData, setCartData] = useRecoilState(cartState);

  const deleteInCart = (id : number) => {
    const newData = cartData.filter((item) => item.id !== id);
    setCartData(newData);
  };

  return (
    <Container>
      <CartList data={cartData}>
        {(item) => (
          <CartItem key={item.id} item={item} deleteInCart={deleteInCart} />
        )}
      </CartList>
      <TotalAmount data={cartData} />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default CartContainer;
