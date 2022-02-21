import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function DetailContainer() {
  const { id } = useParams<string>();

  // const detailData = useFilteredData(id);
  // if (!detailData) return null;

  return (
    <Container>
      {/* <DetailInfo data={detailData} /> */}
    </Container>
  );
}

const Container = styled.div`

`;

export default DetailContainer;
