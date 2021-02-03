import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import SelectMenuItem from '../../../../types/SelectMenuItem';

interface Props {
  onChange: (event: any) => void;
  value: string;
}

const label = "How many years of CDL Class A experience do you have?";

const selectMenuItems: SelectMenuItem[] = [
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

export default function ExperienceSelect(props: Props) {
  const {onChange, value} = props;

  const handleChange = React.useCallback((event) => {
    if (onChange) onChange(event);
  }, [onChange])

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
        {selectMenuItems.map((selectMenuItem: SelectMenuItem, index: number) => (
          <MenuItem key={index} value={selectMenuItem.value}>{selectMenuItem.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
