import styled from 'styled-components';
const color = 'blue';
export const Button = styled.button`
  background: ${props => (props.color ? props.color : color)};
  color: white;
  font-size: 1.5rem;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
`;
