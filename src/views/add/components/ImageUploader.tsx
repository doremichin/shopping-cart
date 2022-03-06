import React from 'react';
import styled from 'styled-components';

interface Props {
    imageUploadStorage(e : React.ChangeEvent<HTMLInputElement>) : Promise<any>
    handleImage() : null | JSX.Element
}

function ImageUploader({ handleImage, imageUploadStorage } : Props) {
  return (
    <Container>
      <ImageUploadLabel htmlFor="product-image-upload" className="image-upload-label">
        <Image>
          {handleImage()}
        </Image>
        <p>+</p>
        <p className="in-label">클릭해서 이미지를 등록해 주세요.</p>
      </ImageUploadLabel>
      <ImageUploadInput type="file" accept="image/*" onChange={imageUploadStorage} id="product-image-upload" />
    </Container>
  );
}

const Container = styled.div`

`;
const Image = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
  }
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
`;

const ImageUploadInput = styled.input`
  display: none;
`;
export default ImageUploader;
