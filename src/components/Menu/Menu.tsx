import { Button, ButtonGroup } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';
import { Root } from './Menu.styled';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
type Props = {};

/**
 * MenuContainer
 *
 * @param {Props} { }
 */
export const Menu: FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query as { id: string | undefined };
  return (
    <Root>
      <ButtonGroup
        className="buttons"
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          onClick={() => {
            router.push(`/logs/${id || ''}`);
          }}
        >
          <AccountBalanceIcon />
        </Button>
        {id &&
          [
            ['raw', '生ログデータ'],
            ['ranking', 'ランキング'],
          ].map(([key, name]) => (
            <Button
              key={key}
              onClick={() => {
                router.push(`/logs/${id}/${key}/1`, undefined, { shallow: true });
              }}
            >
              {name}
            </Button>
          ))}
      </ButtonGroup>
    </Root>
  );
};
