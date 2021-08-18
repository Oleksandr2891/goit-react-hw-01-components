import PropTypes from 'prop-types';

const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    );
}

export default StatisticsItem;

StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};