import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS } from '../../graphql/queries/movies';
import { Box, Grid, Paper, Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import { useSearchParams } from 'react-router-dom';

const Recommend = () => {
  const [params] = useSearchParams();
  let ids = params.get('ids').split(',').map(x => +x);
  let title = params.get('title');

  const { loading, error, data } = useQuery(MOVIES_BY_IDS, { variables: { ids } });


  if ( loading ) return <p>Loading...</p>;

  if ( error ) return <p>Error :(</p>;

  return (
    <Box sx={ { flexGrow: 1, mt: 2 } }>
      <Paper sx={ { mb: 2, p:2 } }>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            { title }
          </Typography>
        </Box>
      </Paper>


      <Paper>
        <Box sx={ { flexGrow: 1, padding: 2 } }>
          <Grid container spacing={ 2 }>
            { data.moviesByIds && data.moviesByIds.map((item) => (
              <Grid key={ item.posterPath }
                    item
                    xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
                <MovieCard movie={ item } isPreviewMode/>
              </Grid>
            )) }
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Recommend;
