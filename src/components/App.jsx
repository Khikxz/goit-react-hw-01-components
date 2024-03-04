import {User} from "./User/User.jsx"
import user from "./User/user.json"

import {Data} from "./Data/Data.jsx"
import data from "./Data/data.json"

import {FriendList} from "./Friends/FriendList.jsx"
import friendlist from "./Friends/friends.json"

import {Transactions} from "./Transactions/TransactionHistory.jsx";
import transactions from "./Transactions/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      REACT HOMEWORK-1: COMPONENTS
      <User
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
      />
      <Data data = {data}/>
      <FriendList friends = {friendlist}/>
      <Transactions transactions = {transactions}/>
    </div>
  );
};
