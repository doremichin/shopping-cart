import React from 'react';
import styled from 'styled-components';
import {IProduct} from "../../../interfaces/interface.Product";

interface Props {
    item : IProduct
    onDelete(id : number) : void
    addQty(id : number) : void
    subQty(id : number) : void
}

function CartItem ({item,onDelete,addQty,subQty} : Props) {

    return(
        <Container>
            <Cancel onClick={() => onDelete(item.id)}>
                삭제
            </Cancel>
            <Title>
                {item.title}
            </Title>
            <Price>
                {item.price} 원
            </Price>
            <Buttons>
                <Add onClick={() => addQty(item.id)}>+</Add>
                <Qty>{item.qty}</Qty>
                <Sub onClick={() => subQty(item.id)}>-</Sub>
            </Buttons>
        </Container>
    )
};

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
`;
const Cancel = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Title = styled.div`
  
`;
const Price = styled.div`
  
`;
const Buttons = styled.div`
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
`
const Add = styled(Button)`
  
`;
const Sub = styled(Button)`
  
`;
const Qty = styled.div`
  margin: 0 8px;
`;


export default CartItem;
