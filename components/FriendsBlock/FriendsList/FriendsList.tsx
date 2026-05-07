import { PetOrganization } from "//types/friend";
import css from "./FriendList.module.css";
import FriendsItem from "../FirendsItem/FriendsItem";

interface FriendsProps {
  friends: PetOrganization[];
}

const FriendsList = ({ friends }: FriendsProps) => {
  return (
    <ul className={css.frinedsList}>
      {friends.map((el) => (
        <FriendsItem el={el} key={el._id} />
      ))}
    </ul>
  );
};

export default FriendsList;
