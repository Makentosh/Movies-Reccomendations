import { Box, Divider, IconButton, InputBase, Paper, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Field, Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

const SelectedMoviesForm = ({ onSubmit }) => {

  const validate = (values) => {
    const errors = {};

    if ( !values.listName ) {
      errors.listName = 'Назва списку обов\'язкова';
    }

    return errors;
  };

  return (
    <Form
      onSubmit={ onSubmit }
      validate={ validate }
      render={ ({ handleSubmit }) => (
        <form onSubmit={ handleSubmit }>
          <Paper component="div"
                 sx={ { p: '2px 4px', display: 'flex', alignItems: 'center' } }>

            <Field
              name="listName"
              render={ ({ input, meta }) => (
                <Stack spacing={ 2 }
                       sx={ { position: 'relative' } }
                       flex={ 'auto' }>

                  <FormattedMessage id="put_the_list_name">
                    { placeholder =>
                      <InputBase sx={ { ml: 1, flex: 1, zIndex: 2 } }
                                 { ...input }
                                 placeholder={ placeholder.join() }
                                 inputProps={ { 'aria-label': 'put list name' } }/>
                    }
                  </FormattedMessage>

                  { ( meta.error && meta.touched ) &&
                    <Box
                      sx={ {
                        position: 'absolute',
                        bottom: '-10px',
                        top: '-44px',
                        color: 'red'
                      } }>
                      { meta.error }
                    </Box>
                  }
                </Stack>
              ) }
            />


            <Divider sx={ { height: 28, m: 0.5 } }
                     orientation="vertical"/>

            <IconButton color="primary"
                        type={ 'submit' }
                        sx={ { p: '10px' } }
                        aria-label="directions">
              <CheckIcon/>
            </IconButton>
          </Paper>
        </form>
      ) }
    />
  );
};


export default SelectedMoviesForm;
