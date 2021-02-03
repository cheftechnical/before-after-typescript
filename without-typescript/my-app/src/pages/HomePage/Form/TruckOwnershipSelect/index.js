import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

const label = 'Do you own your truck?';

const selectMenuItems = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
  {
    label: 'Plan to purchase soon',
    value: 'plan to purchase soon',
  }
];

export default function TruckOwnershipSelect(props) {
  const {onChange, value} = props;

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="truck-ownership-label">{label}</InputLabel>
      <Select
        id="truck-ownership"
        label={label}
        name="truckOwnership"
        onChange={onChange}
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

