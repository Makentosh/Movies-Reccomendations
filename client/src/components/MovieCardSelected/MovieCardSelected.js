import * as React from 'react';
import PropsTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, MenuItem, Typography } from '@mui/material';
import CardMenu from '../CardMenu';
import { formatDate } from '../Tools';
import { FormattedMessage } from 'react-intl';


const MovieCardSelected = ({ movie, onCardDelete }) => {

  return (
    <Card sx={ { display: 'flex', mb: 2, flexShrink: 0 } }>
      <CardMedia component="img"
                 sx={ { width: 100 } }
                 image={ movie.posterPath ? movie.posterPath : '' }
                 alt={ movie.title }
      />
      <Box sx={ { display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' } }>
        <CardContent sx={ { flex: '1 0 auto' } }>
          <Typography component="div" variant="h5">
            { movie.title }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            { formatDate(movie.releaseDate) }
          </Typography>
        </CardContent>
        <Box sx={ { p: 2, pt: 0 } }>
          { movie.genres?.length ? (
            <Typography variant="subtitle1" color="text.secondary" component="div">
              { movie.genres[0].name }
            </Typography>
          ) : null }
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Length: { movie.runtime }
          </Typography>
        </Box>
        <CardMenu>
          <MenuItem onClick={ () => onCardDelete(movie) }>
            <FormattedMessage id="delete"/>
          </MenuItem>
        </CardMenu>
      </Box>

    </Card>
  );
};

export default MovieCardSelected;

MovieCardSelected.propTypes = {
  movie: PropsTypes.shape({
    posterPath: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    releaseDate: PropsTypes.string,
    genres: PropsTypes.arrayOf(PropsTypes.shape({
      id: PropsTypes.number,
      name: PropsTypes.string
    })),
    runtime: PropsTypes.number
  }).isRequired,
  onCardDelete: PropsTypes.func
};
