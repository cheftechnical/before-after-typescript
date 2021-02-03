import * as React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import ProgressButton from './index';

export default {
  title: 'Components/ProgressButton',
  component: ProgressButton
} as Meta;

export const Default: React.VFC<{}> = () => <ProgressButton waiting={false}>My Button</ProgressButton>
export const Waiting: React.VFC<{}> = () => <ProgressButton waiting={true}>My Button</ProgressButton>
