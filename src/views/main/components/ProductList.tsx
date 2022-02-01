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
            <Col>
                {
                    data.map((item, index) => children(item,index))
                }
            </Col>
        </Container>
    )
};

const Container = styled.div`

`;
const Col = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
export default ProductList;
