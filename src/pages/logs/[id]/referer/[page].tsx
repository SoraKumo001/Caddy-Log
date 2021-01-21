import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Pager } from '../../../../components/Pager';
import { useFetch } from '@react-liblary/use-fetch';
import { RankingView } from '../../../../components/RankingView';
import { Root } from '../../../../styled/logs.styled';
import { Button } from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';
import { RankingResultType } from '../../../../libs/getRanking';

const Page = () => {
  const router = useRouter();
  const { id, page } = router.query as { id: string; page: string };
  const { data, dispatch } = useFetch<RankingResultType>(`/api/logs/${id}/referer/${page}`);
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
        <RankingView data={{ ...data, host: '' }} />
      </div>
    </Root>
  );
};

export default Page;
