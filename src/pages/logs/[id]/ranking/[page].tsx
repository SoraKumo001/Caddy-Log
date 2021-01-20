import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Pager } from '../../../../components/Pager';
import { RankingResultType } from '../../../../libs/readLogData';
import { useFetch } from '../../../../libs/useFetch';
import { RankingView } from '../../../../components/RankingView';
import { Root } from '../../../../styled/logs.styled';
import { Button } from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';

const Page = () => {
  const router = useRouter();
  const { id, page } = router.query as { id: string; page: string };
  const { data, dispatch } = useFetch<RankingResultType>(`/api/logs/${id}/ranking/${page}`);
  const [allCount, setAllCount] = useState(data?.allCount || 0);
  useEffect(() => {
    if (data?.allCount) {
      setAllCount(data.allCount);
    }
  }, [data?.allCount]);
  return (
    <Root>
      <div className="action">
        <Button color="primary" onClick={() => dispatch()}>
          <LoopIcon />
        </Button>
        <Pager allCount={allCount} page={Number(page)} />
      </div>
      <div className="main">
        <RankingView data={data} />
      </div>
    </Root>
  );
};

export default Page;
