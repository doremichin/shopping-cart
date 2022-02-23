import React from 'react';
import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface Props {
    register : UseFormRegister<any>
}

// 사용할 컴포넌트는 아니고 register를 props로 넘기는 테스트 컴포넌트

function Test({ register } : Props) {
  return (
    <Container>
      <TestInput {...register('test')} />
    </Container>
  );
}

const Container = styled.div`

`;
const TestInput = styled.input`
  
`;
export default Test;
