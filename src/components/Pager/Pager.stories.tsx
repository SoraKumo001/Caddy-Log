import React from 'react';
import { Pager } from '.';
import { Decorator } from '../../storybook';

export default {
  title: 'Components/Pager',
  decorators: [Decorator],
  component: Pager,
};

export const Primary = (args: Parameters<typeof Pager>[0]) => (
  <>
    <Pager {...args}></Pager>
  </>
);
Primary.parameters = {
  viewMode: 'docs',
};
