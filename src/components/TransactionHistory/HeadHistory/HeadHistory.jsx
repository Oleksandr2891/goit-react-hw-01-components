import s from './HeadHistory.module.css'

const HeadHistory = () => {
    return (
        <thead>
            <tr>
                <th className={s.headItem}>Type</th>
                <th className={s.headItem}>Amount</th>
                <th className={s.headItem}>Currency</th>
            </tr>
        </thead>
    );
}

export default HeadHistory;