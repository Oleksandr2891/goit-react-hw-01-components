import s from './Statistics.module.css'
import StatisticsItem from "./StatisicsItem/StatisticsItem";

const Statistics = ({ stats, title }) => {
    return (
        <section className={s.wrapper}>
            {{ title } && <h2 className={title && s.title}>{title}</h2>}

            <ul className={s.colorbox}>
                {stats.map(({ id, label, percentage }) => <StatisticsItem key={id} label={label} percentage={percentage} />)}
            </ul>
        </section>
    )

}

export default Statistics;