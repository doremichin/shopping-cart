import React from 'react';
import styled from 'styled-components';
import {ProductData} from "../../../ProductData";
import {IProduct} from "../../../interfaces/interface.Product";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";
import { useRecoilState } from 'recoil';
import {cartState} from "../../../atoms/cartAtom";

function MainContainer () {

    const [cart, setCart] = useRecoilState(cartState)

    const productData  : IProduct[] = ProductData;

    const addCart = (item : IProduct) => {
        const id = item.id
        const index = cart.findIndex((data) => data.id === id)
        //요소가 없으면 -1, 있으면 0 이상
        if(index === -1) {
            setCart([
                ...cart,
                {
                    ...item,
                    qty : 1
                }
            ])
        }
    }

    return(
        <Container>
            <ProductList data={productData}>
                {(item, index) => <ProductItem item={item} key={item.id || index} addCart={addCart}/>}
            </ProductList>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;


export default MainContainer;
