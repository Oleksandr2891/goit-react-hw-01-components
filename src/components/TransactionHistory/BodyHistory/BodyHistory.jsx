import PropTypes from 'prop-types';

const BodyHistory = ({ type, amount, currency }) => {
    return (
        <tbody>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
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