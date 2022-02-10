import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../../../interfaces/interface.Product';

interface Props {
    data : IProduct
}

function DetailInfo({ data } : Props) {
  return (
    <Container>
      <Product>
        <Thumb>
          <Image>
            <img src={data.thumb} alt="" />
          </Image>
        </Thumb>
        <Desc>
          <Title>
            {data.title}
          </Title>
          <Price>
            {data.price}
            원
          </Price>
        </Desc>
      </Product>
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
const Product = styled.div`
  display: flex;
`;
const Thumb = styled.div`
  
`;
const Image = styled.div`
  width: 100px;
  img{
    width: 100%;
  }
`;
const Desc = styled.div`
  
`;
const Title = styled.div`
  
`;
const Price = styled.div`
  
`;

export default DetailInfo;
