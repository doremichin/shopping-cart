import React from 'react';
import styled from 'styled-components';

import { AiOutlineDelete } from 'react-icons/ai';

import { IProduct } from '../../../interfaces/interface.Product';
import CountProduct from '../../shared/Utills/CountProduct';

interface Props {
    item : IProduct
    deleteInCart(id : number) : void
}

function CartItem({ item, deleteInCart } : Props) {
  return (
    <Container>
      <Cancel onClick={() => deleteInCart(item.id)}>
        <AiOutlineDelete />
      </Cancel>
      <Thumb>
        <img src={item.thumbnail} alt="" />
      </Thumb>
      <Title>
        {item.title}
      </Title>
      <Price>
        {item.price.toLocaleString()}
        {' '}
        원
      </Price>

      <CountProduct item={item} />

    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
`;
const Cancel = styled.div`
  padding: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Thumb = styled.div`
  width: 70px;
  img{
    width: 100%;
  }
`;
const Title = styled.div`
  
`;
const Price = styled.div`
  
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export default CartItem;
