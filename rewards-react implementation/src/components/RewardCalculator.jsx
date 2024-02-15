import React, { useState, useEffect } from 'react';
import transactionsData from '../data/transactions.json';
const RewardCalculator = () => {
  const [transactions, setTransactions] = useState([]);
  const [rewardPointsPerMonth, setRewardPointsPerMonth] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an asynchronous API call to fetch data
    const fetchTransactions = async () => {
      // Simulate a delay of 2 seconds to fetch data
      const transactions = await new Promise(resolve => {
        setTimeout(() => {
          // TODO: use try catch block to handle errors to parse the JSON
          resolve(transactionsData);
          setLoading(false);
        }, 2000);
      }, reject => {
        setLoading(false);
        reject('Error fetching data');
      });
    
      if ( Array.isArray(transactions) ) {
        setTransactions(transactions);
      } else {
        setError('Error fetching data');
      }


    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const calculateRewardPoints = () => {
      const rewardPoints = transactions.map(transaction => {
        const totalSpent = transaction.amount;
        let points = 0;

        if (totalSpent > 100) {
          points += (totalSpent - 100) * 2;
        }

        if (totalSpent > 50) {
          points += (totalSpent - 50);
        }

        return { customer: transaction.customer, points, date: transaction.date };
      });

      const monthlyRewardPoints = {};
      rewardPoints.forEach(({ customer, points, date }) => {
        const month = new Date(date).getMonth();
        if (!monthlyRewardPoints[customer]) {
          monthlyRewardPoints[customer] = Array(3).fill(0); // Three months
        }
        monthlyRewardPoints[customer][month] += points;
      });

      setRewardPointsPerMonth(monthlyRewardPoints);
    };

    if (transactions.length > 0) {
      calculateRewardPoints();
    }
  }, [transactions]);

  if (loading) {
    return <div>Hang tight! Fetching data...</div>;
  }

  if (transactions.length === 0 || !rewardPointsPerMonth) {
    return <div>No transactions found</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Reward Points</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Month 1</th>
            <th>Month 2</th>
            <th>Month 3</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rewardPointsPerMonth).map(customer => (
            <tr key={customer}>
              <td>{customer}</td>
              {rewardPointsPerMonth[customer].map((points, index) => (
                <td key={index}>{points}</td>
              ))}
              <td>
                {rewardPointsPerMonth[customer].reduce(
                  (total, points) => total + points,
                  0
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardCalculator;
