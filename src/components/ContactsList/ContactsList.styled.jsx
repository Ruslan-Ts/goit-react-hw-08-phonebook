import styled from 'styled-components';

export const Table = styled.table`
  font-size: 30px;
  font-weight: 500;
  padding: 5px 20px;
`;
export const TableHead = styled.thead`
  background-color: #8467f8;
  font-size: 20px;
  font-weight: 700;
`;
export const TableBody = styled.tbody`
  background-color: #bebcf9;
  font-size: 15px;
  font-weight: 500;
`;
export const TableCell = styled.td`
  padding: 5px 20px;
`;

export const TableLine = styled.tr`
  &:nth-of-type(2n) {
    background-color: #9a96ff;
  }
`;
