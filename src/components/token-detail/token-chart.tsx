import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';

const TradingViewChart = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Sample candlestick data (OHLC format)
  const data = [
    ['2023-01-01', 100, 110, 90, 105],
    ['2023-01-02', 105, 115, 95, 110],
    ['2023-01-03', 110, 125, 105, 120],
    ['2023-01-04', 120, 130, 115, 125],
    ['2023-01-05', 125, 135, 120, 130],
    ['2023-01-06', 130, 140, 125, 135],
    ['2023-01-07', 135, 145, 130, 140],
  ];

  const option = {
    backgroundColor: isDarkMode
      ? theme.palette.background.default
      : theme.palette.background.paper,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      backgroundColor: isDarkMode
        ? theme.palette.background.paper
        : theme.palette.background.default,
      textStyle: {
        color: theme.palette.text.primary,
      },
      borderColor: theme.palette.divider,
    },
    legend: {
      data: ['K-Line'],
      textStyle: {
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily,
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item[0]),
      axisLine: {
        lineStyle: {
          color: theme.palette.divider,
        },
      },
      axisLabel: {
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily,
      },
    },
    yAxis: {
      scale: true,
      axisLine: {
        lineStyle: {
          color: theme.palette.divider,
        },
      },
      splitLine: {
        lineStyle: {
          color: theme.palette.divider,
          opacity: 0.3,
        },
      },
      axisLabel: {
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily,
      },
    },
    series: [
      {
        name: 'K-Line',
        type: 'candlestick',
        data: data.map((item) => [
          item[1], // Open
          item[2], // Close
          item[3], // Low
          item[4], // High
        ]),
        itemStyle: {
          color: theme.palette.success.main, // Green for up
          color0: theme.palette.error.main, // Red for down
          borderColor: theme.palette.success.main,
          borderColor0: theme.palette.error.main,
        },
        markPoint: {
          label: {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
          },
          data: [
            {
              name: 'Highest',
              type: 'max',
              valueDim: 'highest',
            },
            {
              name: 'Lowest',
              type: 'min',
              valueDim: 'lowest',
            },
          ],
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        theme={isDarkMode ? 'dark' : 'light'}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default TradingViewChart;
