import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHeader,
  TableRow,
  TableHeaderCell,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <section>
      <TransactionsTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TableRow key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </TableRow>
            );
          })}
        </tbody>
      </TransactionsTable>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
