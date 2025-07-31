'use client';
import { Box, Container } from '@mui/material';
import TokenHeader from '@/components/token-detail/token-header';
import TokenChart from '@/components/token-detail/token-chart';
import BuySellBox from '@/components/token-detail/buy-sell';
import { tokenData } from '@/components/token-detail/token-mock';
import TabsSection from '../../../components/token-detail/tab-section';

export default function TokenDetailsPage() {
  const { name, developer, contract, marketCap, created } = tokenData;

  return (
    <Container maxWidth='xl' sx={{ mt: 4 }}>
      <TokenHeader
        name={name}
        creator={developer}
        contract={contract}
        marketCap={marketCap}
        createdAt={created}
      />

      {/* Chart & BuySellBox layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          mt: 4,
        }}>
        <Box sx={{ flex: 2 }}>
          <TokenChart />
        </Box>
        <Box sx={{ flex: 1 }}>
          <BuySellBox />
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <TabsSection />
      </Box>
    </Container>
  );
}
