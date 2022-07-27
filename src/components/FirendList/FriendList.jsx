import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem';
import { FriendListSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      <ul>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          ></FriendListItem>
        ))}
      </ul>
    </FriendListSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
