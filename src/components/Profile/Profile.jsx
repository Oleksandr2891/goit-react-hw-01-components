import DescriptionUser from "./DescriptionUser/DescriptionUser";
import StatsUser from "./StatsUser/StatsUser";
import s from "./Profile.module.css"

const Profile = ({ user }) => {
    const { name, tag, location, avatar, stats } = user;
    return (
        <div className={s.card}>
            <DescriptionUser name={name} tag={tag} location={location} avatar={avatar} />
            <StatsUser stats={stats} />
        </div>
    )
}

export default Profile;

