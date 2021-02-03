import * as React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import ProgressButton, {Props} from './index';

export default {
  title: 'Components/ProgressButton',
  component: ProgressButton
} as Meta;

const Template: Story<Props> = (args) => (
  <ProgressButton {...args}>
    My Button Text
  </ProgressButton>
);

export const Default = Template.bind({});
Default.args = {
  waiting: false,
};

export const Waiting = Template.bind({});
Waiting.args = {
  waiting: true,
};
