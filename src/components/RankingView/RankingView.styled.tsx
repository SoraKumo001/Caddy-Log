import styled from 'styled-components';

export const Root = styled.div`
  .progress {
    text-align: center;
  }
  .log {
    display: flex;
    margin: 1px;
    padding: 1px;
    background: #ececec;
    &:nth-child(odd) {
      background: #d3d3d3;
    }
  }
  .count {
    min-width: 12ex;
    text-align: right;
    padding-right: 2ex;
  }
`;
