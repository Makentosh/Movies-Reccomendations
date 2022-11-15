import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { SORT_OPTIONS } from '../../../constants';

export const SortField = () => {
  return (
    <Field
      name="sortBy"
      render={ ({ input }) => (
        <FormattedMessage id="filters.sort_by">
          { placeholder =>
            <FormControl fullWidth
                         size={ 'small' }>
              <InputLabel id="demo-simple-select-label">{ placeholder }</InputLabel>
              <Select
                size={ 'small' }
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                label={ placeholder }
                { ...input }
              >
                { SORT_OPTIONS.map(({ label, value }) => (
                  <MenuItem key={ value } value={ value }>
                    <FormattedMessage id={ `filters.sort.${ label }` }></FormattedMessage>
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
