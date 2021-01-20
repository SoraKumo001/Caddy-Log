import React from 'react';
import { Menu } from '.';
import { Decorator } from '../../storybook';

export default {
  title: 'Components/MenuContainer',
  decorators: [Decorator],
  component: Menu,
};

export const Primary = (args: Parameters<typeof Menu>[0]) => (
  <>
    <Menu {...args}></Menu>
  </>
);
Primary.parameters = {
  viewMode: 'docs',
};
