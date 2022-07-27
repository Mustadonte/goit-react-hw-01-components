import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0;
  padding: 10px 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${props => (props.isOnline ? `green` : `red`)};
`;

export const Avatar = styled.img`
  margin: 0 5px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
