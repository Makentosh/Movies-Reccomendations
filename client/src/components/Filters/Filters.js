import { Form } from 'react-final-form';
import {
  AdultField,
  GenreField,
  ReleaseYearField,
  SortDirectionField,
  SortField,
  SubmitField,
  YearField
} from '../FilterFields';
import { GENRES_QUERY } from '../../graphql/queries/filters';
import { useQuery } from '@apollo/client';
import { Grid, Paper } from '@mui/material';

const Filters = ({ onSubmit, initialValues }) => {
  const { loading, error, data } = useQuery(GENRES_QUERY);

  if ( error ) {
    return 'Ups error';
  }

  if ( loading ) {
    return 'Loading ...';
  }

  return (
    <Paper sx={ { padding: 8 } }>
      <Form
        onSubmit={ onSubmit }
        initialValues={ initialValues }
        render={ ({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={ handleSubmit }>
            <Grid container
                  spacing={ 2 }>
              <Grid item sm={ 1 }>
                <YearField/>
              </Grid>
              <Grid item sm={ 1 }>
                <ReleaseYearField/>
              </Grid>
              <Grid item sm={ 1 }>
                <GenreField data={ data }/>
              </Grid>
              <Grid item sm={ 2 }>
                <SortDirectionField/>
              </Grid>
              <Grid item sm={ 1 }>
                <SortField/>
              </Grid>
              <Grid item sm={ 1.5 }>
                <AdultField/>
              </Grid>
              <Grid item sm={ 2 }>
                <SubmitField/>
              </Grid>
            </Grid>
          </form>
        ) }/>
    </Paper>
  );
};

export default Filters;
