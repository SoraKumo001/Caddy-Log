import React, { FC } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core';
import { useRouter } from 'next/router';

import { LogStatType } from '../../libs/getLogStat';
import { format } from 'date-fns';
import { useFetch } from '@react-liblary/use-fetch';

type Props = {};

/**
 * LogNameList
 *
 * @param {Props} { }
 */

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.activatedOpacity,
    },
    '&': {
      cursor: 'pointer',
    },
  },
}))(TableRow);
export const LogNameList: FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query as { id: string | undefined };
  const { data } = useFetch<LogStatType[]>(`/api/logs`);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow
              key={row.name}
              hover
              selected={id === row.name}
              onClick={() => router.push(`/logs/${row.name}/`, undefined, { shallow: true })}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>
                {format(new Date(row.ctime), 'yyyy/MM/dd HH:mm:ss')} ～{' '}
                {format(new Date(row.mtime), 'yyyy/MM/dd HH:mm:ss')}
              </StyledTableCell>
              <StyledTableCell align="right">
                {Math.ceil(row.size / 1024).toLocaleString()} KB
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
