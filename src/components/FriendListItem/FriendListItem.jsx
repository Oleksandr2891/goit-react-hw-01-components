import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li>
            <span className={isOnline.toString()}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className={name}>{name}</p>
        </li>
    );
}

export default FriendListItem;



FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};