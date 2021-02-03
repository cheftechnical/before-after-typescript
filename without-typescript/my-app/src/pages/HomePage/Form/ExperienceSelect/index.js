import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

const label = 'How many years of CDL Class A experience do you have?';

const selectMenuItems = [
  {
    label: 'Less than 2 years of experience',
    value: '<2'
  },
  {
    label: 'Between 2 and 3 years of experience',
    value: '>= 2 & < 3'
  },
  {
    label: 'Between 3 and 5 years of experience',
    value: '>= 3 & < 5'
  },
  {
    label: 'Between 5 and 10 years of experience',
    value: '>= 5 & < 10'
  },
  {
    label: 'More than 10 years of experience',
    value: '>= 10'
  }
];

export default function ExperienceSelect(props) {
  const {onChange, value} = props;

  const handleChange = React.useCallback(event => {
    if (onChange) onChange(event);
  }, [onChange]);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="experience-label">{label}</InputLabel>
      <Select
        id="experience"
        label={label}
        name="experience"
        onChange={handleChange}
        value={value}
        variant="outlined"
      >
        {selectMenuItems.map((selectMenuItem, index) => (
          <MenuItem key={index} value={selectMenuItem.value}>{selectMenuItem.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
