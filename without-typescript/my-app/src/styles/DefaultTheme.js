import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {createMuiTheme, CssBaseline} from '@material-ui/core';

const theme = createMuiTheme({});

export default function DefaultTheme(props) {
  const {children} = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}