import React, { FC } from 'react';
import { Root } from './RawView.styled';
import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { CaddyLog } from './../../types/CaddyLog';
import LinearProgress from '@material-ui/core/LinearProgress';
type Props = { logs: CaddyLog[] };

/**
 * RawView
 *
 * @param {Props} { }
 */
export const RawView: FC<Props> = ({ logs }) => {
  return (
    <Root>
      {!logs ? (
        <LinearProgress />
      ) : (
        logs
          .slice()
          .reverse()
          .map((value, index) => (
            <div key={index} className={`log${value.level === 'error' ? ' error' : ''}`}>
              <div className="level">{value.level}</div>
              <div className="date">
                {format(new Date(value.ts * 1000), 'yyyy/MM/dd HH:mm:ss', {
                  locale: ja,
                })}
              </div>
              <div className="address">{value.request.remote_addr}</div>
              <a
                className="url"
                target="_blank"
                href={`https://${value.request.host}${value.request.uri}`}
              >
                {value.request.uri}
              </a>
            </div>
          ))
      )}
    </Root>
  );
};
