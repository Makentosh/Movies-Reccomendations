import { useCallback, useContext } from 'react';
import { Box, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { LOCALES } from '../../constants';
import { AppContext } from '../../providers/appContext';

const LanguageSwitcher = () => {
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale
    });
  }, [dispatch]);

  const handleAlignment = (event, locale) => {
    if ( locale !== null ) {
      setLanguage(locale);
    }
  };


  return (
    <Paper component={ Box }>
      <ToggleButtonGroup
        value={ state.locale }
        exclusive
        size={ 'small' }
        onChange={ handleAlignment }>
        <ToggleButton value={ LOCALES.ENGLISH }>
          EN
        </ToggleButton>
        <ToggleButton value={ LOCALES.UKRAINIAN }>
          UA
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
};

export default LanguageSwitcher;
