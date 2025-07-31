import dynamic from 'next/dynamic';
// const Chart = dynamic(() => import('./trading-view-chart'), { ssr: false });

export default function TokenChart() {
  return (
    <div style={{ height: '400px', width: '100%', marginBottom: '2rem' }}>
    //   <Chart />
    </div>
  );
}
