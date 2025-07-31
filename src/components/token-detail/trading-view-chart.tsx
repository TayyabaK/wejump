'use client';

import React, { useEffect, useRef } from 'react';

interface TradingViewChartProps {
  symbol: string; // Example: 'SOLUSDT' or 'BINANCE:BTCUSDT'
  interval?: string; // '1', '5', '15', '30', '60', 'D', etc.
  theme?: 'light' | 'dark';
  height?: number;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({
  symbol,
  interval = '5',
  theme = 'light',
  height = 500,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Avoid duplicate script injection
//     if (document.getElementById('tradingview-widget-script')) return;

//     const script = document.createElement('script');
//     script.id = 'tradingview-widget-script';
//     script.src = 'https://s3.tradingview.com/tv.js';
//     script.async = true;
//     script.onload = () => {
//       if (window.TradingView) {
//         new window.TradingView.widget({
//           autosize: true,
//           symbol,
//           interval,
//           timezone: 'Etc/UTC',
//           theme,
//           style: '1',
//           locale: 'en',
//           toolbar_bg: '#f1f3f6',
//           enable_publishing: false,
//           allow_symbol_change: false,
//           container_id: 'tradingview-widget-container',
//         });
//       }
//     };
//     containerRef.current?.appendChild(script);
//   }, [symbol, interval, theme]);

  return (
    <div
      id="tradingview-widget-container"
      ref={containerRef}
      style={{ height, width: '100%' }}
    />
  );
};

export default TradingViewChart;
