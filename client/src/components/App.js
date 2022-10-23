import { Box, Container, CssBaseline } from '@mui/material';
import { Navigation } from './index';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <CssBaseline/>
      <Navigation/>


      <Box sx={ {
        minHeight: '100%',
        backgroundColor: (theme) => theme.palette.grey[100]
      } }>
        <Container maxWidth="xxl">
          <Outlet/>
        </Container>
      </Box>
    </>
  );
};

export default App;
