import user from '../../Data/User.json';
import friends from '../../Data/Friends.json';
import statistics from '../../Data/Statistics.json';
import transactions from '../../Data/Transactions.json';
import randomColor from 'randomcolor';
import { Container } from './App.styled';
import {
  Profile,
  Statistics,
  TransactionHistory,
  FriendList,
} from 'components';
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload Statistics"
        stats={statistics}
        color={randomColor()}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
