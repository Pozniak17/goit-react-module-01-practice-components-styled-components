import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  gap: 8px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoBlockWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[2]}px;
`;
