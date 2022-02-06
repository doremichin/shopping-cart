import React from 'react';
import styled from 'styled-components';
import {IProduct} from "../../../interfaces/interface.Product";

interface Props {
    data : IProduct[]
}

function TotalAmount ({data} : Props) {

    const { totalQty, totalPrice } = calculateTotalAmount()

    function calculateTotalAmount () {
        let totalPrice = 0;
        let totalQty = 0;

        data.map((item) => {
            const sum = item.price * item.qty
            totalPrice += sum
            totalQty += item.qty
        })
        return {
            totalPrice,
            totalQty
        }
    }

    return(
        <Container>
            <Price>
                가격 : {totalPrice} 원
            </Price>
            <Qty>
                총계 : {totalQty} 개
            </Qty>
        </Container>
    )
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Price = styled.div`
  margin-right: 20px;
`;
const Qty = styled.div`
  
`;

export default TotalAmount;
