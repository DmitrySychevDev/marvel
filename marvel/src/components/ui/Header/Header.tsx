import React, { useState } from 'react';

import LightIcon from '@mui/icons-material/Brightness7';
import DarkIcon from '@mui/icons-material/Brightness4';
import {
  AppBar,
  Grid,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';

// Components
import { NavigationButton } from 'components';

// Logo
import MarvelLogo from 'assets/marvel-logo.svg';

import { themeStore } from 'store';

// Styles
import { styles } from './HeaderStyle';

const useStyles = makeStyles()(styles);

const Header: React.FC = () => {
  const { classes } = useStyles(undefined);
  const linkStyle = {
    color: '#ffffff'
  };

  const [isLight, setIsLight] = useState<boolean>(
    themeStore.theme.palette.mode === 'light'
  );
  const [lang, setLang] = useState<string>('en');
  const { t, i18n } = useTranslation();

  const changeThemeEvent = () => {
    if (isLight) {
      themeStore.setDark();
    } else {
      themeStore.setLight();
    }
    setIsLight((prev) => !prev);
  };
  const changeLang = (e: SelectChangeEvent) => {
    setLang(e.target.value as string);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Grid item>
      <AppBar
        position="static"
        color="primary"
        className={classes.root}
        sx={{
          padding: { xs: '10px 20px', md: '20px 30px', lg: '20px 30px' },
          position: 'fixed'
        }}
      >
        <Box
          className={classes.headerContent}
          sx={{
            gridTemplateAreas: {
              lg: '"logo link controls"',
              sm: '"logo controls" "link link"',
              xs: '"logo controls" "link link"',
              md: '"logo controls" "link link"'
            },
            gap: '10px',
            width: '100%',
            justifyItems: 'center'
          }}
        >
          <Grid item className={classes.logo}>
            <img src={MarvelLogo} alt="logo" />
          </Grid>
          <Grid item className={classes.linkBlock}>
            <Grid container spacing={2}>
              <NavigationButton
                linkTo="/"
                title={t('characters')}
                styleParams={linkStyle}
              />
              <NavigationButton
                linkTo="/comics"
                title={t('comics')}
                styleParams={linkStyle}
              />
              <NavigationButton
                linkTo="/series"
                title={t('series')}
                styleParams={linkStyle}
              />
              <NavigationButton
                linkTo="/favourites"
                title="Favourites"
                styleParams={linkStyle}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.controls}>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton onClick={changeThemeEvent}>
                  {isLight ? (
                    <LightIcon sx={{ color: '#ffffff' }} />
                  ) : (
                    <DarkIcon />
                  )}
                </IconButton>
              </Grid>
              <Grid item>
                <Box sx={{ minWidth: 70, maxHeight: 40 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      displayEmpty
                      value={lang}
                      className={classes.selectItems}
                      onChange={changeLang}
                    >
                      <MenuItem sx={{ color: '#e62429' }} value="en">
                        En
                      </MenuItem>
                      <MenuItem sx={{ color: '#e62429' }} value="ru">
                        Рус
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </Grid>
  );
};

export default Header;
