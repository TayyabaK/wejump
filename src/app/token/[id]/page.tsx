'use client';
import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TokenHeader from '@/components/token-detail/token-header';
import TradingViewChart from '@/components/token-detail/token-chart';
import BuySellBox from '@/components/token-detail/buy-sell';
import { tokenData } from '@/components/token-detail/token-mock';
import TabsSection from '../../../components/token-detail/tab-section';

export default function TokenDetailsPage() {
  const { name, developer, contract, marketCap, created } = tokenData;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth='xl' sx={{ mt: 4 }}>
      <TokenHeader
        name={name}
        creator={developer}
        contract={contract}
        marketCap={marketCap}
        createdAt={created}
        logoUrl={'/sample/token-1.webp'} // Replace with actual logo URL
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          mt: 4,
        }}>
        {/* Mobile Order: BuySell -> Chart -> Tabs */}
        {isMobile && (
          <>
            <BuySellBox />
            <TradingViewChart />
            <TabsSection />
          </>
        )}

        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
              alignItems: 'flex-start',
              width: '100%',
              flexGrow: 1,
            }}>
            {/* Left Column */}
            <Box
              sx={{
                flex: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                minHeight: '80vh',
                width: '100%', // Ensure it takes full width
                overflow: 'hidden', // Prevent overflow
              }}>
              <TradingViewChart />
              <TabsSection />
            </Box>

            {/* Right Column - Sticky BuySellBox */}
            <Box
              sx={{
                flex: 1,
                position: 'sticky',
                top: 20,
                minWidth: '300px', // Optional: to keep BuySellBox reasonable
              }}>
              <BuySellBox />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}
