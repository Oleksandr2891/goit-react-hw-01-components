import BodyHistory from "./BodyHistory/BodyHistory";
import HeadHistory from "./HeadHistory/HeadHistory";

const TransactionHistory = ({ transactions }) => {
    return (
        <table className="transaction-history">
            <HeadHistory />
            {transactions.map(({ id, type, amount, currency }) => <BodyHistory key={id} type={type} amount={amount} currency={currency} />)}

        </table>
    );
}

export default TransactionHistory;