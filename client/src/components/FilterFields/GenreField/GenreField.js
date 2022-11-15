import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const GenreField = ({ data }) => {
  return (
    <Field
      name="genre"
      render={ ({ input }) => (
        <FormattedMessage id="filters.genre">
          { placeholder =>
            <FormControl size={ 'small' }
                         fullWidth>
              <InputLabel id="demo-simple-select-label">{ placeholder }</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                size={ 'small' }
                label={ placeholder }
                { ...input }
              >
                { data.genres.map(({ name, id }) => (
                  <MenuItem key={ id } value={ id }>
                    { name }
                  </MenuItem>
                )) }
              </Select>
            </FormControl>

          }
        </FormattedMessage>
      ) }
    />
  );
};
