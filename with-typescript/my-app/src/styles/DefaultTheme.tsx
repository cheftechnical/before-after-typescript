import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {createMuiTheme, CssBaseline} from '@material-ui/core';

interface Props {
  children: JSX.Element[] | JSX.Element | string;
}

const theme = createMuiTheme({});

export default function DefaultTheme(props: Props) {
  const {children} = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
