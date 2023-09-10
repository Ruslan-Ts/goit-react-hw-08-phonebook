import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  /* justify-content: space-evenly; */
  gap: 60px;
  padding: 40px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const PageBox = styled.div`
  min-height: 100vh;
  background-color: #cfcfcf;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Header = styled.header`
  margin: 0px;
  padding: 0px;
`;

export const RegContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
