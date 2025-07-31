import { Box, Typography, TextField, Button } from '@mui/material';

export default function BuySellBox({ marketCap }) {
  return (
    <Box border="1px solid #ccc" borderRadius={2} p={3}>
      <Typography fontWeight={700}>Market Cap Progress:</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography>Current: ${marketCap}</Typography>
        <Typography>Target: ${marketCap}</Typography>
      </Box>
      <Box my={2}>
        <Button variant="contained" color="success" fullWidth>Buy</Button>
        <Button variant="outlined" fullWidth sx={{ mt: 1 }}>Sell</Button>
      </Box>
      <TextField fullWidth label="Slippage (%)" defaultValue={5} sx={{ my: 1 }} />
      <TextField fullWidth label="Amount" defaultValue={0} />
      <Typography variant="caption">≈ 0 Nutter</Typography>
    </Box>
  );
}
