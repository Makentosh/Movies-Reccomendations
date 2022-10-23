import * as React from 'react';
import PropsTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, styled, Typography } from '@mui/material';
import { formatDate } from '../Tools';
import { AddBoxOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { AppContext } from '../../providers/appContext';

const CardInfo = styled(CardContent)(({ theme }) => ( {
  '&:last-child': {
    padding: theme.spacing(2)
  }
} ));

const PlusIcon = styled(Box)(({ theme }) => ( {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, .6)',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  }
} ));

const MovieCard = ({ movie, onCardSelect, isPreviewMode }) => {
  const { state } = useContext(AppContext);

  return (
    <Card sx={ { maxWidth: 250, position: 'relative' } }>
      <Box sx={ { position: 'relative' } }>
        <CardMedia
          component="img"
          height="250"
          image={ movie.posterPath }
          alt={ movie.title }/>
        { !isPreviewMode &&
          <PlusIcon onClick={ () => onCardSelect(movie) }>
            <AddBoxOutlined sx={ { fontSize: 80 } }/>
          </PlusIcon>
        }

      </Box>

      <CardInfo>
        <Typography variant="h6"
                    gutterBottom
                    omponent="div">
          { movie.title }
        </Typography>
        <Typography variant="subtitle1"
                    gutterBottom
                    component="div">
          { formatDate(movie.releaseDate, state.locale) }
        </Typography>
      </CardInfo>
    </Card>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    posterPath: PropsTypes.string.isRequired,
    title: PropsTypes.string,
    releaseDate: PropsTypes.string
  }).isRequired,
  onCardSelect: PropsTypes.func,
  isPreviewMode: PropsTypes.bool
};
