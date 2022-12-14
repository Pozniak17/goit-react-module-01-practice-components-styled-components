import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.space[4]};
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const BadgeList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal} black;
  border-radius: ${props => props.theme.radii.big};

  /* робимо визначення кольору в нашому компоненті Badge */
  color: ${props => {
    return props.active ? props.theme.colors.white : props.theme.colors.black;
  }};

  background-color: ${props => {
    return props.active ? props.theme.colors.green : props.theme.colors.muted;
  }};
`;
