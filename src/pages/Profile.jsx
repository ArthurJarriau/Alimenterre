import { Link } from "react-router-dom";
import Identity from "../components/Identity";
import Preferences from "../components/Preferences";

const Profile = () => {
  return (
    <main className="profile">
      <Identity name="Philippe KAMO" />
      <Preferences />
      <Link to="/logout" className="profile__logout">
        DÉCONNEXION
      </Link>
    </main>
  );
};

export default Profile;
