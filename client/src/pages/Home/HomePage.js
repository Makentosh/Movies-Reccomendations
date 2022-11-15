import { Box, Grid, Pagination, Paper } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import { useQuery } from '@apollo/client';
import { MOVIES } from '../../graphql/queries/movies';
import { useMovies } from '../../hooks/useMovies/useMovies';
import SelectedMoviesSection from '../../components/SelectedMoviesSection';
import Filters from '../../components/Filters';
import { useFilters } from '../../hooks/useFilters/useFilters';

const HomePage = () => {
  const { filter, setPage, setFilter } = useFilters();
  const { selectedMovies, selectMovie, deleteMovie, resetSelectedMovies } = useMovies();
  const { loading, error, data } = useQuery(MOVIES, { variables: { filter } });

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  const onFilterSubmit = (data) => {
    console.log(data);
    setFilter(data);
  };

  const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  if ( loading ) return <p>Loading...</p>;

  if ( error ) return <p>Error :(</p>;

  return (
    <Box sx={ { flexGrow: 1, mt: 2 } }>
      <Grid container
            spacing={ 2 }>
        <Grid item
              xs={ 12 }>
          <Filters onSubmit={ onFilterSubmit } initialValues={filter}/>
        </Grid>

        <Grid item
              xs={ 12 }
              md={ 8 }>
          <Paper>
            <Box sx={ { mb: 2, pt: 2, display: 'flex', justifyContent: 'center' } }>
              <Pagination count={ pagesCount }
                          page={ filter.page }
                          onChange={ paginationHandler }/>
            </Box>

            <Box sx={ { flexGrow: 1, padding: 2 } }>
              <Grid container spacing={ 2 }>
                { data.movies.results && data.movies.results.map((item) => (
                  <Grid key={ item.posterPath }
                        item
                        xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                    <MovieCard movie={ item }
                               onCardSelect={ selectMovie }/>
                  </Grid>
                )) }
              </Grid>
            </Box>

            <Box sx={ { mt: 2, pb: 2, display: 'flex', justifyContent: 'center' } }>
              <Pagination count={ data?.movies?.totalPages }
                          page={ filter.page }
                          onChange={ paginationHandler }/>
            </Box>
          </Paper>
        </Grid>

        <Grid item
              xs={ 12 }
              md={ 4 }>
          <SelectedMoviesSection selectedMovies={ selectedMovies }
                                 resetSelectedMovies={ resetSelectedMovies }
                                 deleteMovie={ deleteMovie }/>

        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
