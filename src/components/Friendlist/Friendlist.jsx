import s from './Friendlist.module.css'
import FriendListItem from '../FriendListItem/FriendListItem';

const Friendlist = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(({ avatar, id, name, isOnline }) => <FriendListItem name={name} avatar={avatar} key={id} isOnline={isOnline} />)}
        </ul >

    );
}

export default Friendlist;
