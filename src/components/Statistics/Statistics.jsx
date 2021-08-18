import StatisticsItem from "./StatisicsItem/StatisticsItem";

const Statistics = ({ stats, title }) => {
    return (
        <section className="statistics">
            {{ title } && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => <StatisticsItem key={id} label={label} percentage={percentage} />)}
            </ul>
        </section>
    );
}

export default Statistics;