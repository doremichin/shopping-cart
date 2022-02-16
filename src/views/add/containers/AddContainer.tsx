import React from 'react';
import styled from 'styled-components';

import AddProductForm from '../components/AddProductForm';

function AddContainer() {
  return (
    <Container>
      <AddProductForm />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default AddContainer;
