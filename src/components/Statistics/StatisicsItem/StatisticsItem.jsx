import s from './StatisticsItem.module.css'
import PropTypes from 'prop-types';
import { red } from 'color-name';

const StatisticsItem = ({ label, percentage }) => {
    const color = function makeRandomColor() {
        let c = '';
        while (c.length < 6) {
            c += (Math.random()).toString(16).substr(-6).substr(-1)
        }
        return '#' + c;
    }

    return (
        <li className={s.item} style={{ backgroundColor: `${color()}` }}>
            <span className={s.lsbel} >{label}</span>
            <span className={s.percentage}>{percentage}</span>
        </li >
    );
}

export default StatisticsItem;

StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};