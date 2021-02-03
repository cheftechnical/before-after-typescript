import * as React from 'react';
import {Box, Button, Grid, TextField} from '@material-ui/core';
import {v4} from 'uuid';

import ExperienceSelect from './ExperienceSelect';
import ProgressButton from '../../../components/ProgressButton';
import TruckOwnershipSelect from './TruckOwnershipSelect';

const defaultData = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
  experience: '',
  truckOwnership: ''
};

const timeoutMs = 1000;

export default function Form(props) {
  const {onReset, onSubmit, onUpdate, values} = props;

  const [data, setData] = React.useState(defaultData);
  const [sending, setSending] = React.useState(false);

  const handleChange = React.useCallback(event => {
    const key = event.target.name;
    const value = event.target.value;

    setData(prevState => {
      return {
        ...prevState,
        [key]: value
      };
    });
  }, []);

  const handleReset = React.useCallback(() => {
    setData(defaultData);
    if (onReset) onReset();
  }, [onReset]);

  const handleSubmit = React.useCallback(() => {
    // Simulate sending this to a server and getting an id
    setSending(true);
    setTimeout(() => {
      const id = v4();
      const updatedData = {
        ...data,
        id,
      };

      // Raise the on submit event
      onSubmit(updatedData);

      // Clear the form
      setData(defaultData);
      setSending(false);
    }, timeoutMs);
  }, [data, onSubmit]);

  const handleUpdate = React.useCallback(() => {
    // Simulate sending this to a server
    setSending(true);
    setTimeout(() => {
      // Raise the onUpdate event (if supported)
      if (onUpdate) onUpdate(data);

      setData(defaultData);
      setSending(false);
    }, timeoutMs);
  }, [data, onUpdate]);

  React.useEffect(() => {
    if (!values) return;
    setData(values);
  }, [values]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="emailAddress"
            onChange={handleChange}
            value={data.emailAddress}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="(###) ###-####"
            value={data.phoneNumber}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <ExperienceSelect
            onChange={handleChange}
            value={data.experience}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TruckOwnershipSelect
            onChange={handleChange}
            value={data.truckOwnership}
          />
        </Grid>
      </Grid>

      <Box display="flex" mt={5}>
        {data.id ? (
          <React.Fragment>
            <Box>
              <ProgressButton
                onClick={handleUpdate}
                waiting={sending}
              >
                Update
              </ProgressButton>
            </Box>
            <Box ml={1}>
              <Button
                color="secondary"
                onClick={handleReset}
                variant="text"
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <Box>
            <ProgressButton
              onClick={handleSubmit}
              waiting={sending}
            >
              Submit
            </ProgressButton>
          </Box>
        )}
      </Box>
    </div>
  );
}