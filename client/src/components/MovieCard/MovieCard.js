import * as React from 'react';
import PropsTypes from 'prop-types';
import { Card, CardContent, CardMedia, MenuItem, styled, Typography } from '@mui/material';
import CardMenu from '../CardMenu';
import { formatDate } from '../Tools';

const CardInfo = styled(CardContent)(({ theme }) => ( {
  '&:last-child': {
    padding: theme.spacing(2)
  }
} ));

const MovieCard = ({ movie, onCardSelect }) => {

  return (
    <Card sx={ { maxWidth: 250, position: 'relative' } }>
      <CardMenu>
        <MenuItem onClick={ onCardSelect }>
          Select
        </MenuItem>
      </CardMenu>
      <CardMedia component="img"
                 height="350"
                 image={ movie.image }
                 alt={ movie.title }/>
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          { movie.title }
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          { formatDate(movie.releaseDate) }
        </Typography>
      </CardInfo>
    </Card>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    image: PropsTypes.string.isRequired,
    title: PropsTypes.string,
    releaseDate: PropsTypes.string
  }).isRequired,
  onCardSelect: PropsTypes.func
}
