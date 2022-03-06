import React from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';

import { ChartState } from '../../../redux/chart/slice';

interface Props {
    data : ChartState['data']
}

function ProtoChartComponent({ data } : Props) {
  const draft = JSON.parse(JSON.stringify(data));

  return (
    <Container>
      <Chart
        options={draft.options}
        series={draft.series}
        type="area"
        width="100%"
      />
    </Container>
  );
}

const Container = styled.div`

`;

export default ProtoChartComponent;
