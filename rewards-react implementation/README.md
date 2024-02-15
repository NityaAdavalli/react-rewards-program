# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Reward Calculator README

This React application calculates reward points earned by customers based on their transactions over a three-month period. The reward points are calculated according to the specified rules: customers receive 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction.

## Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```
4. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Components

### RewardCalculator Component

- **Description**: This component fetches transaction data from a JSON file and calculates the reward points earned by each customer per month and the total.
  
- **State**:
  - `transactions`: Stores the fetched transaction data.
  - `rewardPointsPerMonth`: Stores the calculated reward points per customer per month.
  - `loading`: Indicates whether data is being fetched.
  - `error`: Stores any error encountered during data fetching.
  
- **Effects**:
  - Fetches transaction data asynchronously when the component mounts.
  - Calculates reward points when transaction data changes.
  
- **Rendering**:
  - Displays a loading message while fetching data.
  - Displays an error message if data fetching fails.
  - Renders a table showing reward points earned by each customer for each of the three months and the total points earned.

## Data

The transaction data is stored in a JSON file located at `src/data/transactions.json`. Each transaction object includes the following fields:

- `transactionId`: Unique identifier for each transaction.
- `customer`: Name of the customer making the transaction.
- `date`: Date of the transaction in the format YYYY-MM-DD.
- `amount`: Total amount spent in the transaction.

## Dependencies

- `react`: Frontend JavaScript library for building user interfaces.
- `react-dom`: DOM-specific methods for React.
- `react-scripts`: Scripts and configuration used by Create React App.

## Development

This application was developed using React with functional components and hooks. Asynchronous data fetching is simulated using a 2-second delay. Error handling is implemented to handle data fetching errors gracefully.
