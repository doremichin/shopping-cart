import React from 'react';
import styled from 'styled-components';
import {IProduct} from "../../../interfaces/interface.Product";
import CartItem from "./CartItem";

interface Props {
    data : IProduct[]
    children(item : IProduct) : JSX.Element
}

function CartList ({children,data} : Props) {
    return(
        <Container>
            <Col>
                {
                    data.map((item) => {
                        return children(item)
                    })
                }
            </Col>
        </Container>
    )
};

const Container = styled.div`

`;
const Col = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

export default CartList;