import s from './SectionTask.module.css'


const SectionTask = ({ title, children }) => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}> {title}</h1>
            {children}
        </div>
    );
}
export default SectionTask;