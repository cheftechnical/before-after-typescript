import * as React from 'react';
import {IconButton, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  colRight: {
    textAlign: 'right',
  }
}));

export default function DataTable(props) {
  const classes = useStyles();
  const {data, onDeleteRow, onEditRow} = props;

  const handleDelete = React.useCallback(data => {
    if (onDeleteRow) onDeleteRow(data);
  }, [onDeleteRow]);

  const handleEdit = React.useCallback(data => {
    if (onEditRow) onEditRow(data);
  }, [onEditRow]);

  if (!data || data.length === 0) {
    return (
      <div>
        <Typography variant="overline">No data</Typography>
      </div>
    );
  }

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email Address</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell>Years of Experience</TableCell>
          <TableCell>Truck Ownership</TableCell>
          <TableCell className={classes.colRight}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((current, index) => (
          <TableRow key={index}>
            <TableCell>{current.firstName}</TableCell>
            <TableCell>{current.lastName}</TableCell>
            <TableCell>{current.emailAddress}</TableCell>
            <TableCell>{current.phoneNumber}</TableCell>
            <TableCell>{current.experience}</TableCell>
            <TableCell>{current.truckOwnership}</TableCell>
            <TableCell className={classes.colRight}>
              <IconButton aria-label="edit" onClick={() => handleEdit(current)}>
                <EditIcon fontSize="small"/>
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleDelete(current)}>
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}