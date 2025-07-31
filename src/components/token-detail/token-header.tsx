import { Box, Typography, Chip } from '@mui/material';

export default function TokenHeader({ name, creator, contract, marketCap, createdAt }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" p={2}>
      <Box>
        <Typography variant="h5" fontWeight={700}>{name}</Typography>
        <Typography variant="subtitle2">Created by: {creator}</Typography>
        <Chip label={`Contract: ${contract}`} color="default" sx={{ mt: 1 }} />
      </Box>
      <Box textAlign="right">
        <Typography color="error" fontWeight={700}>
          Market Cap: ${marketCap.toLocaleString()}
        </Typography>
        <Typography variant="caption">Time Created: {createdAt}</Typography>
      </Box>
    </Box>
  );
}
