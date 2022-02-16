import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { defaultInput } from '../../../style/ElementDefaultStyle';

type FormInputs = {
    title: string
    price: number
    stock : number
    thumbnail : string
};
function AddProductForm() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data : FormInputs) => console.log(data);

  const imageUploadStorage = () => {
    console.log('이미지 추가');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>상품등록</Title>
      <Left>
        <ImageUploadLabel htmlFor="product-image-upload" className="image-upload-label">
          <p>+</p>
          <p className="in-label">클릭해서 이미지를 등록해 주세요.</p>
        </ImageUploadLabel>

        <ImageUploadInput type="file" accept="image/*" onChange={imageUploadStorage} id="product-image-upload" />
      </Left>
      <Right>
        <Label>
          상품명 :
          <InputFormContents {...register('title')} />
        </Label>
        <Label>
          가격 :
          <InputFormContents {...register('price', { required: true, valueAsNumber: true })} type="number" min="0" className="onlyNumber" />
        </Label>
        <Label>
          재고 :
          <InputFormContents {...register('stock', { required: true, valueAsNumber: true })} type="number" min="0" className="onlyNumber" />
        </Label>
        <Label>
          이미지 주소 :
          <InputFormContents {...register('thumbnail', { required: true })} readOnly />
        </Label>
        <ButtonSubmit>상품 등록</ButtonSubmit>
      </Right>
    </Form>
  );
}

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  
`;
const Title = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Left = styled.div`
    margin-right: 30px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ButtonSubmit = styled.button`
  
`;

const InputFormContents = styled(defaultInput)`
  flex: 1;
  padding: 5px;
  &.onlyNumber{
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
const Label = styled.label`
  padding: 12px 6px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
`;
const ImageUploadLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 300px;
  height: 300px;
  background-color: #eee;
  cursor: pointer;
  transition: 0.3s;
  &.image-upload-label{
    font-size: 30px;
  }
  & .in-label {
    position: absolute;
    bottom: 100px;
    font-size: 15px;
  }
  &:hover{
    opacity: 0.5;
  }
`;

const ImageUploadInput = styled.input`
  display: none;
`;
export default AddProductForm;
