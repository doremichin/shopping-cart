import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';

import { ProductData } from '../../../ProductData';
import { IProduct } from '../../../interfaces/interface.Product';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import { cartState } from '../../../atoms/cartAtom';

function MainContainer() {
  const [cartData, setCartData] = useRecoilState(cartState);

  const productData : IProduct[] = ProductData;

  const addInCart = (item : IProduct) => {
    const { id } = item;
    const index = cartData.findIndex((data) => data.id === id);
    // 요소가 없으면 -1, 있으면 0 이상
    if (index === -1) {
      setCartData([
        ...cartData,
        {
          ...item,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <Container>
      <ProductList data={productData}>
        {(item, index) => <ProductItem item={item} key={item.id || index} addInCart={addInCart} />}
      </ProductList>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default MainContainer;
