import { LinearProgress } from '@material-ui/core';
import React, { FC } from 'react';
import { Root } from './RankingView.styled';
import { RankingResultType } from '../../libs/readLogData';

type Props = { data?: RankingResultType };

/**
 * RankingView
 *
 * @param {Props} { }
 */
export const RankingView: FC<Props> = ({ data }) => {
  return (
    <Root>
      {!data?.logs ? (
        <LinearProgress />
      ) : (
        data.logs
          .slice()
          .reverse()
          .map((value, index) => (
            <div key={index} className="log">
              <div className="count">{value.count}</div>
              <a className="url" target="_blank" href={`${data.host}${value.uri}`}>
                {value.uri}
              </a>
            </div>
          ))
      )}
    </Root>
  );
};
