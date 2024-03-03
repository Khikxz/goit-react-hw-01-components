import User from "./User/User.jsx"
import Data from "./Data/Data.jsx"
import Friends from "./Friends/Friends.jsx"
import Transaction from "./Transactions/Transaction.jsx";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      REACT HOMEWORK-1: COMPONENTS
      <User/>
      <Data/>
      <Friends/>
      <Transaction/>
    </div>
  );
};
