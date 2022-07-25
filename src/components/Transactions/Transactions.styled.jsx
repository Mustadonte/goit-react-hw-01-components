import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
  margin: 20px 0;
  padding tbody {
    color: rgb(118, 134, 150);
  }
`;

//  color: rgb(118, 134, 150);
export const TableRow = styled.tr`
  height: 50px;
  text-align: center;
  text-transform: capitalize;
  :nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;
export const TableHeader = styled.thead`
  width: 100%;
  background-color: #00bcd5;
  border: white;
  padding: 10px 0;
  color: white;
`;
export const TableHeaderCell = styled.th`
  padding: 10px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
`;
