import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {cartState} from "../../../atoms/cartAtom";
import CartItem from '../components/CartItem';
import CartList from "../components/CartList";
import TotalValue from "../components/TotalValue";

function CartContainer () {

    const [cartData, setCartData] = useRecoilState(cartState);

    const handleDelete = (id : number) => {
        const newData = cartData.filter((item) => item.id !== id);
        setCartData(newData)
    }

    return(
        <Container>
            <CartList data={cartData}>
                {(item) => (
                    <CartItem key={item.id} item={item} onDelete={handleDelete}/>
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
