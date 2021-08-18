
import DescriptionUser from "./DescriptionUser/DescriptionUser";
import StatsUser from "./StatsUser/StatsUser";

const Profile = ({ user }) => {
    // console.log(user);
    // const { name, tag, location, avatar, stats } = user;
    return (
        <div className="profile">
            <DescriptionUser name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} />
            <StatsUser stats={user.stats} />
        </div>
    )
}

export default Profile;

