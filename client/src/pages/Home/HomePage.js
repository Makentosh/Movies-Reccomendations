import { Box, Grid, Paper, styled } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import { movies } from '../../stories/stub';

const SelectedMovies = styled(Paper)(({ theme }) => ( {
  background: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 80px)',
  position: 'sticky',
  top: theme.spacing(2)
} ));

const HomePage = (props) => {
  return (
    <Box sx={ { flexGrow: 1, mt: 2 } }>
      <Grid container
            spacing={ 2 }>
        <Grid item
              xs={ 12 }>
          <Paper>
            filters
          </Paper>
        </Grid>

        <Grid item
              xs={ 12 }
              md={ 8 }>
          <Paper>
            <Box sx={ { flexGrow: 1, padding: 2 } }>
              <Grid container spacing={ 2 }>
                { movies.map((item) => (
                  <Grid key={ item.releaseDate }
                        item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <MovieCard movie={ item }/>
                  </Grid>
                )) }
              </Grid>
            </Box>
          </Paper>

        </Grid>

        <Grid item
              xs={ 12 }
              md={ 4 }>
          <SelectedMovies>
            selected movies
          </SelectedMovies>

        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
