import css from "./page.module.css";
import { getFriends } from "//lib/api/api";
import FriendsList from "//components/FriendsBlock/FriendsList/FriendsList";
import UniversalTitle from "//components/UniversalTitle/UniversalTitle";

const Friends = async () => {
  const friends = await getFriends();
  return (
    <section className={css.container}>
      <UniversalTitle title="Our Friends" />
      <FriendsList friends={friends} />
    </section>
  );
};

export default Friends;
