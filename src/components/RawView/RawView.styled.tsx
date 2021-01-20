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
    &.error {
      background: #ffbbbb;
    }
  }
  .level {
    min-width: 6ex;
  }
  .date {
    min-width: 20ex;
  }
  .address {
    min-width: 22ex;
  }
`;
