import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Pager } from '../../../../components/Pager';
import { RawView } from '../../../../components/RawView';
import { LogResultType } from '../../../../libs/readLogData';
import { useFetch } from '../../../../libs/useFetch';
import { Root } from '../../../../styled/logs.styled';
import LoopIcon from '@material-ui/icons/Loop';

const Page = () => {
  const router = useRouter();
  const { id, page } = router.query as { id: string; page: string };
  const { data, dispatch } = useFetch<LogResultType>(`/api/logs/${id}/raw/${page}`);
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
        <RawView logs={data?.logs} />
      </div>
    </Root>
  );
};

export default Page;
