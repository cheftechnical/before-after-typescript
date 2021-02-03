import * as React from 'react';
import {Box, makeStyles, Paper, Typography} from '@material-ui/core';
import DefaultLayout from '../../layouts/DefaultLayout';
import DataTable from './DataTable';
import Form from './Form';

const initialState = [
  {
    id: '6df0eed7-0522-4629-86fc-f58c5b595e72',
    firstName: 'Simon',
    lastName: 'Yates',
    emailAddress: 'simon@sybaris.ca',
    phoneNumber: '416-904-6007',
    experience: '< 2',
    truckOwnership: 'no',
  }
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const [selected, setSelected] = React.useState();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleDeleteRow = React.useCallback(data => {
    dispatch({
      type: 'delete-row',
      data: data,
    });
  }, []);

  const handleEditRow = React.useCallback(data => {
    setSelected(data);
  }, []);

  const handleReset = React.useCallback(() => {
    setSelected(null);
  }, []);

  const handleSubmit = React.useCallback(data => {
    dispatch({
      type: 'add-row',
      data: data,
    });
  }, []);

  const handleUpdate = React.useCallback(data => {
    dispatch({
      type: 'update-row',
      data: data
    });
  }, []);

  return (
    <DefaultLayout>
      <Box mt={5}>
        <Typography gutterBottom variant="h5">Form</Typography>
        <Paper className={classes.paper}>
          <Form
            onReset={handleReset}
            onSubmit={handleSubmit}
            onUpdate={handleUpdate}
            values={selected}
          />
        </Paper>
      </Box>

      <Box mt={5}>
        <Typography gutterBottom variant="h5">Applications</Typography>
        <Paper className={classes.paper}>
          <DataTable
            data={state}
            onDeleteRow={handleDeleteRow}
            onEditRow={handleEditRow}
          />
        </Paper>
      </Box>
    </DefaultLayout>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'add-row':
      // Append the row
      return [...state, action.data];

    case 'delete-row':
      // Delete the row
      return state.reduce((accumulator, current) => {
        if (current.id !== action.data.id) {
          return [
            ...accumulator,
            current
          ];
        } else {
          return accumulator;
        }
      }, []);

    case 'update-row':
      // Updates the row
      return state.reduce((accumulator, current) => {
        if (current.id === action.data.id) {
          return [
            ...accumulator,
            {
              ...current,
              ...action.data,
            }
          ];
        } else {
          return [
            ...accumulator,
            current,
          ];
        }
      }, []);

    default:
      throw new Error(`Type "${action.type}" is not supported in reducer.`);
  }
}