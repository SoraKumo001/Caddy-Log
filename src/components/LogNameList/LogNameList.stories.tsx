import React from 'react';
import { LogNameList } from '.';
import { Decorator } from '../../storybook';

export default {
  title: 'Components/LogNameList',
  decorators: [Decorator],
  component: LogNameList,
};

export const Primary = (args: Parameters<typeof LogNameList>[0]) => (
  <>
    <LogNameList {...args}></LogNameList>
  </>
);
Primary.parameters = {
  viewMode: 'docs',
};
