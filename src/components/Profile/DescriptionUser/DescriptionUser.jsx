import PropTypes from 'prop-types';
import s from './DescriptionUser.module.css'

const DescriptionUser = ({ name, tag, location, avatar }) => {
    return (
        <div className={s.wrapper}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={s.image}
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>
    );
}

export default DescriptionUser;

DescriptionUser.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}