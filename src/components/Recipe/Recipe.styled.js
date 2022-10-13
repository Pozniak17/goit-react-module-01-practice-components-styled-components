import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 300px;
  background-color: #c1c48e7a;
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.space[3]}px;
`;
