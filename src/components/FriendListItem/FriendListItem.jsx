import PropTypes from 'prop-types';
import { Friend, Status, Avatar, FriendName } from './FriendListItem.sytled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Friend key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
