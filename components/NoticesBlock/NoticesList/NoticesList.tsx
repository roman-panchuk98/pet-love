import { Notices } from "//types/notices";
import css from "./NoticesList.module.css";
import NoticesItem from "../NoticesItem/NoticesItem";

interface NoticesProps {
  notices: Notices[];
}

const NoticesList = ({ notices }: NoticesProps) => {
  return (
    <ul className={css.noticesList}>
      {notices.map((el) => (
        <NoticesItem el={el} key={el._id} />
      ))}
    </ul>
  );
};

export default NoticesList;
