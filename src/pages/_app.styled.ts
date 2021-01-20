import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html,
  body {
    height: 100%;
    overflow:hidden;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const View = styled.div`
  flex: 1;
  overflow: auto;
`;
