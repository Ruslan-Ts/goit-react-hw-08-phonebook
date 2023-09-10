import styled from 'styled-components';

export const TableCell = styled.td`
  padding: 5px 20px;
`;

export const TableLine = styled.tr`
  &:nth-of-type(2n) {
    background-color: #9a96ff;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  /* text-transform: uppercase; */
  /* width: 100px; */
  border: 0;
  padding: 10px 8px;
  /* margin-top: 10px;
  margin-left: -5px; */
  border-radius: 5px;
  background-color: #3f51b5;
  transition: background-color 300ms;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
