import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Paper from '@mui/material/Paper';

import { IProduct } from '../../../interfaces/interface.Product';

interface Props {
    item : IProduct
    addInCart(item : IProduct) : void
}

function ProductItem({ item, addInCart } : Props) {
  const navigate = useNavigate();
  const [value, setValue] = useState(item.rating);

  return (
    <Paper elevation={3}>
      <Container>
        <Thumb onClick={() => navigate(`/detail/${item.id}`)}>
          <Image>
            <img src={item.thumbnail} alt="" />
          </Image>
        </Thumb>
        {/* <Rating name="read-only" value={value} readOnly precision={0.5}/> */}
        <StyledRating
          readOnly
          name="customized-color"
          value={value}
          precision={0.5}
          icon={<FavoriteIcon fontSize="small" />}
          emptyIcon={<FavoriteBorderIcon fontSize="small" />}
          sx={{ marginBottom: '10px' }}
        />
        <Desc>
          <Title>
            {item.title}
          </Title>
          <Price>
            {item.price.toLocaleString()}
            원
          </Price>
        </Desc>
        <AddCart onClick={() => addInCart(item)}>
          <AddShoppingCartIcon sx={{ fontSize: '20px' }} />
        </AddCart>
      </Container>
    </Paper>
  );
}
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow:  1px 1px 8px #eee;
  padding: 15px;
  margin-bottom: 30px;
`;
const Thumb = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
`;
const Image = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  img{
    width: 100%;
  }
`;
const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Price = styled.span`
  
`;
const AddCart = styled.div`
  cursor: pointer;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  color: #777;
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
