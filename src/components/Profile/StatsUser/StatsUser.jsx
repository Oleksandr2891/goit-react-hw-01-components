import s from './StatsUser.module.css'
import PropTypes from 'prop-types';

const StatsUser = ({ stats }) => {
    const arrStats = Object.entries(stats);
    return (
        <ul className={s.section}>
            {arrStats.map(statsItem => (
                <li key={statsItem[0]} className={s.item}>
                    <span className={s.label}>{statsItem[0]}</span>
                    <span className={s.item}>{statsItem[1]}</span>
                </li>
            )
            )}
        </ul>
    )
}



export default StatsUser;

StatsUser.propTypes = {
    stats: PropTypes.object.isRequired
}