import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';

import { IProduct } from '../../../interfaces/interface.Product';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import { cartState } from '../../../atoms/cartAtom';
import { getProductsFirebase } from '../../../firebase/query';

function MainContainer() {
  const [cartData, setCartData] = useRecoilState(cartState);
  const [products, setProducts] = useState<any>([]);

  const addInCart = (item : IProduct) => {
    const { id } = item;
    const index = cartData.findIndex((data) => data.id === id);
    // 요소가 없으면 -1, 있으면 0 이상
    if (index === -1) {
      setCartData([
        ...cartData,
        {
          ...item,
        },
      ]);
    }
  };

  const getProducts = async () => {
    const result = await getProductsFirebase();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <ProductList data={products}>
        {(item, index) => <ProductItem item={item} key={item.id || index} addInCart={addInCart} />}
      </ProductList>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default MainContainer;
