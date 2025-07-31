'use client';
import { Container, Grid } from '@mui/material';
import TokenHeader from '@/components/token-detail/token-header';
import TokenChart from '@/components/token-detail/token-chart';
import BuySellBox from '@/components/token-detail/buy-sell';
import TokenInfoAccordion from '@/components/token-detail/token-info-accordion';
import ActivityTable from '@/components/token-detail/activity-table';
import TokenHoldersTable from '@/components/token-detail/token-holders-table';
import { tokenData } from '@/components/token-detail/token-mock';

export default function TokenDetailsPage() {
  const { name, developer, contract, marketCap, created } = tokenData;

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <TokenHeader
        name={name}
        creator={developer}
        contract={contract}
        marketCap={marketCap}
        createdAt={created}
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <TokenChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <BuySellBox marketCap={marketCap} />
        </Grid>
      </Grid>

      <TokenInfoAccordion
        info={{
          Supply: tokenData.supply,
          Created: tokenData.created,
          'Trade fees': tokenData.tradeFee,
          'Contract Address': tokenData.contract,
          'Developer Address': tokenData.developer,
        }}
      />

      <ActivityTable />
      <TokenHoldersTable />
    </Container>
  );
}
