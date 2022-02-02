import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {cartState} from "../../../atoms/cartAtom";
import CartItem from '../components/CartItem';
import CartList from "../components/CartList";
import TotalValue from "../components/TotalValue";
import {IProduct} from "../../../interfaces/interface.Product";

function CartContainer () {

    const [cartData, setCartData] = useRecoilState(cartState);
    console.log(cartData)
    const handleDelete = (id : number) => {
        const newData = cartData.filter((item) => item.id !== id);
        setCartData(newData)
    }
    const addQty = (id : number) => {
        //깊은 복사를 해서 배열 속 객체의 값을 바꿔준다.
        const newData : IProduct[] = JSON.parse(JSON.stringify(cartData))
        const index = newData.findIndex((item) => item.id===id)
        newData[index].qty += 1
        setCartData(newData);
    }
    const subQty = (id : number) => {
        const newData : IProduct[] = JSON.parse(JSON.stringify(cartData))
        const index = newData.findIndex((item) => item.id===id)
        if(newData[index].qty === 1) return;
        newData[index].qty -= 1
        setCartData(newData);
    }

    return(
        <Container>
            <CartList data={cartData}>
                {(item) => (
                    <CartItem key={item.id} item={item} onDelete={handleDelete} addQty={addQty} subQty={subQty}/>
                )}
            </CartList>
            <TotalValue data={cartData}/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default CartContainer;
