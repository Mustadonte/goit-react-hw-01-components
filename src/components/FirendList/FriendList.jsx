import PropTypes from 'prop-types';
import {
  FriendListSection,
  FriendListItem,
  Status,
  Avatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem key={id}>
              <Status isOnline={isOnline}></Status>
              <Avatar src={avatar} alt={name} width="48" />
              <FriendName>{name}</FriendName>
            </FriendListItem>
          );
        })}
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
