import user from './profile/user.json';
import Profile from './profile/Profile';
import data from './statistics/data.json';
import Statistics from './statistics/Statistics';
import friends from './friendList/friends.json';
import FriendList from './friendList/FriendList';
import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
export default App;
