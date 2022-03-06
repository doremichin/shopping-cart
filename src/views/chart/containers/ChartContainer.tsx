import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { increment } from '../../../redux/chart/slice';
import DonutChart from '../components/DonutChart';

function ChartContainer() {
  const { data } = useSelector((state : RootState) => state.chart);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(increment());
  };

  return (
    <Container>
      {/* <ProtoChartComponent data={data} /> */}
      {/* <AddButton onClick={handleAdd}> */}
      {/*  더하기 버튼 */}
      {/* </AddButton> */}
      <DonutChart />
    </Container>
  );
}

const Container = styled.div`

`;
const AddButton = styled.div`
  border-radius: 8px;
  display: inline-block;
  padding: 10px;
  background-color: #18f;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    opacity: 0.7;
  }
`;
const Select = styled.select`
  padding: 5px;
    font-size: 16px;
`;

export default ChartContainer;
