import s from './BodyHistory.module.css'
import PropTypes from 'prop-types';

const BodyHistory = ({ type, amount, currency }) => {
    return (
        <tbody className={s.body}>
            <tr className={s.line}>
                <td className={s.item}>{type}</td>
                <td className={s.item}>{amount}</td>
                <td className={s.item}>{currency}</td>
            </tr>
        </tbody>
    );
}
export default BodyHistory;

BodyHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};