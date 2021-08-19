import s from './FriendListItem.module.css'
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={s.wrapper}>
            <span className={`${s.indicate} ${isOnline ? s.red : s.green}`}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li >
    );
}

export default FriendListItem;



FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};