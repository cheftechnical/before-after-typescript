import * as React from 'react';
import {Button, CircularProgress, makeStyles} from '@material-ui/core';
import {green} from '@material-ui/core/colors';

export interface Props {
  children: JSX.Element[] | JSX.Element | string;
  onClick?: () => void;
  waiting: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  circularProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: 'relative',
  },
}));

export default function ProgressButton(props: Props) {
  const classes = useStyles();
  const {children, onClick, waiting} = props;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          disabled={waiting}
          color="primary"
          onClick={onClick}
          variant="contained"
        >
          {children}
        </Button>
        {waiting && <CircularProgress size={24} className={classes.circularProgress}/>}
      </div>
    </div>
  )
}
