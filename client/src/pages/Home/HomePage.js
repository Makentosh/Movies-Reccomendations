import { Box, Grid, Pagination, Paper, styled } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import { useQuery } from '@apollo/client';
import { MOVIES } from '../../graphql/queries/movies';
import { useState } from 'react';

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
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES, { variables: { page } });

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  if ( loading ) return <p>Loading...</p>;
  if ( error ) return <p>Error :(</p>;

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
                { data.movies.results && data.movies.results.map((item) => (
                  <Grid key={ item.posterPath }
                        item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <MovieCard movie={ item }/>
                  </Grid>
                )) }
              </Grid>
            </Box>

            <Box mt={ 2 }
                 pb={ 2 }
                 sx={ { display: 'flex', justifyContent: 'center' } }>
              <Pagination count={ data?.movies?.totalPages }
                          page={ page }
                          onChange={ paginationHandler }/>
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
