import DescriptionUser from "./DescriptionUser/DescriptionUser";
import StatsUser from "./StatsUser/StatsUser";
import s from "./Profile.module.css"

const Profile = ({ user }) => {
    return (
        <div className={s.card}>
            <DescriptionUser name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} />
            <StatsUser stats={user.stats} />
        </div>
    )
}

export default Profile;

