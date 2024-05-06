import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: var(--gray);

    margin-bottom: 3px;
  }
  > strong {
    border-bottom: 1px solid var(--outline);
    padding-top: 2px;
    padding-bottom: 1px;
    margin-bottom: 10px;
  }
`;
