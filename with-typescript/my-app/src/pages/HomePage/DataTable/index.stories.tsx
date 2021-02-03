import * as React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import DataTable, {Props} from './index';

export default {
  title: 'pages/HomePage/DataTable',
  component: DataTable
} as Meta;

const Template: Story<Props> = (args) => <DataTable {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const WithEmptyData = Template.bind({});
WithEmptyData.args = {
  data: [],
};

export const WithData = Template.bind({});
WithData.args = {
  data: [
    {
      id: 'simon-yates',
      firstName: 'Simon',
      lastName: 'Yates',
      emailAddress: 'simon@sybaris.ca',
      phoneNumber: '416-904-6007',
      experience: '<2',
      truckOwnership: 'no',
    },
    {
      id: 'jon-hopkins',
      firstName: 'Jon',
      lastName: 'Hopkins',
      emailAddress: 'jon@example.com',
      phoneNumber: '555-012-2018',
      experience: '>= 3 & < 5',
      truckOwnership: 'yes',
    },
    {
      id: 'four-tet',
      firstName: 'Four',
      lastName: 'Tet',
      emailAddress: 'four@example.com',
      phoneNumber: '555-959-2015',
      experience: '>= 10',
      truckOwnership: 'no',
    }
  ],
}
