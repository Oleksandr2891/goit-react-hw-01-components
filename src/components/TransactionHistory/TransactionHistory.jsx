import s from "./TransactionHistory.module.css";
import BodyHistory from "./BodyHistory/BodyHistory";
import HeadHistory from "./HeadHistory/HeadHistory";

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={s.table}>
            <HeadHistory />
            {transactions.map(({ id, type, amount, currency }) => <BodyHistory key={id} type={type} amount={amount} currency={currency} />)}
        </table>
    );
}

export default TransactionHistory;