import * as React from 'react';
import {Box, makeStyles, Paper, Typography} from '@material-ui/core';
import DefaultLayout from '../../layouts/DefaultLayout';
import DataTable from './DataTable';
import Form from './Form';
import Data from '../../types/Data';

enum DispatchTypeEnum {
  ADD_ROW,
  DELETE_ROW,
  UPDATE_ROW
}

const initialState: Data[] = [
  {
    id: 'abc-123',
    firstName: 'Simon',
    lastName: 'Yates',
    emailAddress: 'simon@sybaris.ca',
    phoneNumber: '416-904-6007',
    experience: '<2',
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

  const [selected, setSelected] = React.useState<Data | null>();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleDeleteRow = React.useCallback((data: Data) => {
    dispatch({
      type: DispatchTypeEnum.DELETE_ROW,
      data: data,
    });
  }, []);

  const handleEditRow = React.useCallback((data: Data) => {
    setSelected(data);
  }, []);

  const handleReset = React.useCallback(() => {
    setSelected(null);
  }, []);

  const handleSubmit = React.useCallback((data: Data) => {
    dispatch({
      type: DispatchTypeEnum.ADD_ROW,
      data: data,
    });
  }, []);

  const handleUpdate = React.useCallback((data: Data) => {
    dispatch({
      type: DispatchTypeEnum.UPDATE_ROW,
      data: data
    });
  }, []);

  return (
    <DefaultLayout>
      <Typography gutterBottom variant="h5">Form</Typography>
      <Paper className={classes.paper}>
        <Form
          onReset={handleReset}
          onSubmit={handleSubmit}
          onUpdate={handleUpdate}
          values={selected}
        />
      </Paper>

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
  )
}

interface DispatchProps {
  type: DispatchTypeEnum;
  data: Data;
}

function reducer(state: Data[], action: DispatchProps) {
  switch (action.type) {
    case DispatchTypeEnum.ADD_ROW:
      // Append the row
      return [...state, action.data];

    case DispatchTypeEnum.DELETE_ROW:
      // Delete the row
      return state.reduce((accumulator: Data[], current: Data) => {
        if (current.id !== action.data.id) {
          return [
            ...accumulator,
            current
          ];
        } else {
          return accumulator;
        }
      }, []);

    case DispatchTypeEnum.UPDATE_ROW:
      // Update the row
      return state.reduce((accumulator: Data[], current: Data) => {
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