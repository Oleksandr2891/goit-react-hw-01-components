
import FriendListItem from '../FriendListItem/FriendListItem';

const Friendlist = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, id, name, isOnline }) => <FriendListItem name={name} avatar={avatar} key={id} isOnline={isOnline} />)}
        </ul >

    );
}

export default Friendlist;
