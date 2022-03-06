import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChartState {
    data : {
      options: {
        chart: {
          id: string
        },
        xaxis: {
          categories: Number[]
        }
      },
      series: [
        {
          name: string
          data: Number[]
        }
      ]
    };
}

const initialState: ChartState = {
  data: {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  },
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    increment: (state) => {
      const xdata = state.data.series[0].data;
      // 여기서 자꾸 + 사용이 안된다는 에러가 떴는데
      // 데이터 타입을 확실하게 Number로 정의해줬더니 해결 됨.
      state.data.series[0].data[0] = Number(xdata[0]) + 10;
    },
    changeChartType: (state, { payload }) => {
      // 의미 없는 액션이 되어부러따...
      state.data.options.chart.id = payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
    },
  },
});

export const { increment, changeChartType, incrementByAmount } = chartSlice.actions;

export default chartSlice.reducer;
