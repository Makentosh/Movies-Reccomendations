import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';

export const AdultField = () => (
  <Field
    name="includeAdult"
    type="checkbox"
    render={ ({ input }) => (
      <FormControl fullWidth>
        <FormControlLabel control={ <Checkbox { ...input } size={ 'small' }/> }
                          label={ <FormattedMessage id="filters.include_adult"/> }/>
      </FormControl>

    ) }
  />
);
