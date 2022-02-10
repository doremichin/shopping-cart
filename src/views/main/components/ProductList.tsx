import React from 'react';
import styled from 'styled-components';
import {IProduct} from "../../../interfaces/interface.Product";
import ProductItem from "./ProductItem";

interface Props {
    data : IProduct[]
    children(item : IProduct, index : number) : JSX.Element
}

function ProductList ({children,data} : Props) {
    return(
        <Container>
            <Row>
                {
                    data.map((item, index) => <Col key={item.id}>{children(item,index)}</Col> )
                }
            </Row>
        </Container>
    )
};

const Container = styled.div`
    padding: 0 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  padding: 0 10px;
  width: 25%;
`;
export default ProductList;
