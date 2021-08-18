import PropTypes from 'prop-types';

const StatsUser = ({ stats }) => {
    const arrStats = Object.entries(stats);
    return (
        <ul className="stats">
            {arrStats.map(statsItem => (
                <li key={statsItem[0]}>
                    <span className="label">{statsItem[0]}</span>
                    <span className="quantity">{statsItem[1]}</span>
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