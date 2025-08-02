'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme, useMediaQuery } from '@mui/material';

const TradingViewChart = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
      axisPointer: { type: 'cross' },
      backgroundColor: isDarkMode
        ? theme.palette.background.paper
        : theme.palette.background.default,
      textStyle: { color: theme.palette.text.primary },
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
      left: '3%',
      right: '3%',
      bottom: '12%',
      top: '10%',
      containLabel: true, // This ensures labels stay within the grid
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item[0]),
      axisLine: { lineStyle: { color: theme.palette.divider } },
      axisLabel: {
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily,
      },
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: theme.palette.divider } },
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
        data: data.map((item) => [item[1], item[2], item[3], item[4]]),
        itemStyle: {
          color: theme.palette.success.main,
          color0: theme.palette.error.main,
          borderColor: theme.palette.success.main,
          borderColor0: theme.palette.error.main,
        },
        markPoint: {
          label: {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
          },
          data: [
            { name: 'Highest', type: 'max', valueDim: 'highest' },
            { name: 'Lowest', type: 'min', valueDim: 'lowest' },
          ],
        },
      },
    ],
  };

  const dynamicHeight = isMobile ? 300 : isTablet ? 400 : 500;

  return (
    <div
      style={{
        width: '100%',
        height: `${dynamicHeight}px`,
        overflow: 'hidden', // Add this to prevent any overflow
      }}>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        theme={isDarkMode ? 'dark' : 'light'}
        notMerge
        lazyUpdate
      />
    </div>
  );
};

export default TradingViewChart;
