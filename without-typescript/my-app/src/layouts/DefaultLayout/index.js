import * as React from 'react';
import {Container} from '@material-ui/core';

export default function DefaultLayout(props) {
  const {children} = props;

  return (
    <div>
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </div>
  );
}
