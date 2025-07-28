// src/components/LanguageSelector.tsx
'use client';

import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  ListItemIcon,
  Typography,
  Box,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useLanguage } from '@/i18n/language-context';

type LanguageCode = 'en' | 'zh' | 'tr' | 'ja';

interface LanguageOption {
  code: LanguageCode;
  displayText: string;
  label: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', displayText: 'EN', label: 'English' },
  { code: 'zh', displayText: 'ZH', label: '中文' },
  { code: 'tr', displayText: 'TR', label: 'Türkçe' },
  { code: 'ja', displayText: 'JA', label: '日本語' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentLanguage = LANGUAGES.find((lang) => lang.code === language);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    handleClose();
  };

  return (
    <Box>
      <Tooltip title="Change language">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-label="language selector"
          aria-controls="language-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'divider',
            minWidth: 64,
            height: 40,
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            {currentLanguage?.displayText}
          </Typography>
        </IconButton>
      </Tooltip>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        PaperProps={{
          sx: {
            minWidth: 160,
            mt: 1,
            boxShadow: 2,
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === language}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              {lang.code === language && <CheckIcon fontSize="small" />}
            </ListItemIcon>
            <Typography variant="body2">
              {lang.label} ({lang.displayText})
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelector;