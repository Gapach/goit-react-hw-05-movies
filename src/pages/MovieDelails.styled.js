import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  border: 1px solid #0d57aa;
  border-radius: 6px;
  background-color: #b5d1f2;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor:pointer;
  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
cursor:auto;
`;