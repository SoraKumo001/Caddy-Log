import React from 'react';
import { RankingView } from '.';
import { Decorator } from '../../storybook';

export default {
  title: 'Components/RankingView',
  decorators: [Decorator],
  component: RankingView,
};

export const Primary = (args: Parameters<typeof RankingView>[0]) => (
  <>
    <RankingView {...args}></RankingView>
  </>
);
Primary.parameters = {
  viewMode: 'docs',
};
