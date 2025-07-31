import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type TokenInfoAccordionProps = {
  info: Record<string, string | number>;
};

export default function TokenInfoAccordion({ info }: TokenInfoAccordionProps) {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>About Coin</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Object.entries(info).map(([label, value]) => (
          <Box key={label} display="flex" justifyContent="space-between" my={0.5}>
            <Typography variant="body2">{label}</Typography>
            <Typography variant="body2" fontWeight={600}>{value}</Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
