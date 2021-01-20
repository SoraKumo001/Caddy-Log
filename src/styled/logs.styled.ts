import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;

  .main {
    flex: 1;
    overflow: auto;
  }
  .action {
    display: flex;
  }
`;
