import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import SelectMenuItem from '../../../../types/SelectMenuItem';

interface Props {
  onChange: (event: any) => void;
  value: string;
}

const label = "Do you own your truck?";

const selectMenuItems: SelectMenuItem[] = [
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

export default function TruckOwnershipSelect(props: Props) {
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
        {selectMenuItems.map((selectMenuItem: SelectMenuItem, index: number) => (
          <MenuItem key={index} value={selectMenuItem.value}>{selectMenuItem.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
