import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { uploadImageToStorage } from '../../../firebase/storage';
import { setProductsFirebase } from '../../../firebase/query';
import ImageUploader from './ImageUploader';
import { defaultInput } from '../../../style/ElementDefaultStyle';

export type FormInputs = {
    title: string
    price: number
    stock : number
    thumbnail : string
    rating : number
};
function AddProductForm() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const {
    register, handleSubmit, watch, formState: { errors }, setValue,
  } = useForm<FormInputs>();

  const onSubmit = async (data : FormInputs) => {
    await setProductsFirebase(data);
    navigate('/');
  };

  const imageUploadStorage = async (e : React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    const url = await uploadImageToStorage(file);
    setValue('thumbnail', url);
    setImageUrl(url);
  };
  const handleImage = () => {
    if (imageUrl.length === 0) {
      return null;
    }
    return <img src={imageUrl} alt="" />;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>상품등록</Title>
      <Left>
        <ImageUploader handleImage={handleImage} imageUploadStorage={imageUploadStorage} />
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
          선호도 :
          <InputFormContents {...register('rating', { required: true, valueAsNumber: true })} type="number" min="0" max="5" step="0.1" className="onlyNumber" placeholder="0 ~ 5 사이 값을 입력해 주세요." />
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
export default AddProductForm;
