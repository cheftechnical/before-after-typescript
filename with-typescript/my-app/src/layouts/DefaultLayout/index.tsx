import * as React from 'react';
import {Container} from '@material-ui/core';

interface Props {
  children: Element | string;
}

export default function DefaultLayout(props: Props) {
  const {children} = props;

  return (
    <div>
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}
