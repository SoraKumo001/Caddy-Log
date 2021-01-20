import { Pagination } from '@material-ui/lab';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Root } from './Pager.styled';

type Props = { page: number; allCount: number };

/**
 * Pager
 *
 * @param {Props} { }
 */
export const Pager: FC<Props> = ({ page, allCount }) => {
  const router = useRouter();
  return (
    <Root>
      <Pagination
        count={Math.floor((allCount + 999) / 1000)}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={(_e, page) => {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, page },
          });
        }}
      />
    </Root>
  );
};
