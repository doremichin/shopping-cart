import React from 'react';
import styled from 'styled-components';
import {IProduct} from "../../../interfaces/interface.Product";

interface Props {
    item : IProduct
    addCart(item : IProduct ) : void
}

function ProductItem ({item,addCart} : Props) {

    return(
        <Container>
            <Thumb>
                <Image>
                    <img src={item.thumb} alt=""/>
                </Image>
            </Thumb>
            <Desc>
                <Title>
                    {item.title}
                </Title>
                <Price>
                    {item.price.toLocaleString()}원
                </Price>
            </Desc>
            <AddCart onClick={() => addCart(item)}>
                +
            </AddCart>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  box-shadow:  1px 1px 8px #eee;
  padding: 15px;
  margin-bottom: 30px;
`;
const Thumb = styled.div`
  margin-right: 30px;
`;
const Image = styled.div`
  margin-right: 20px;
  width: 120px;
  img{
    width: 100%;
  }
`;
const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Price = styled.div`
  
`;
const AddCart = styled.div`
  cursor: pointer;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  transition: 0.2s;

  &:hover {
    background-color: #cbcbcb;
    color: #fff;
  }
`;

export default ProductItem;
