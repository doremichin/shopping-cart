import React from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';

function DonutChart() {
  const options = {
    labels: ['고양이', '강아지', '코뿔소는', '과연', '소인가?'],
  };
  const series = [44, 55, 41, 17, 15];
  const labels = ['A', 'B', 'C', 'D', 'E'];
  return (
    <Container>
      <Chart
        options={options}
        series={series}
        type="donut"

      />
    </Container>
  );
}

const Container = styled.div`

`;

export default DonutChart;
