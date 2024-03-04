import React from 'react';
import css from './TransactionHistory.module.css';

export const Transactions = ({transactions}) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({id, type, amount, currency}) => (
          <tr className={css.tableRow} key={id}>
          <td className={css.tableData}>{type}</td>
          <td className={css.tableData}>{amount}</td>
          <td className={css.tableData}>{currency}</td>
          </tr>          
        ))}
      </tbody>
    </table>
  )
};
