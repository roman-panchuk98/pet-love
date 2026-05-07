import TodayWorkTime from "../TodayWorkTime/TodayWorkTime";
import css from "./FriendsItem.module.css";
import Image from "next/image";
import { PetOrganization } from "//types/friend";

interface FriendsItemProps {
  el: PetOrganization;
}

const FriendsItem = ({ el }: FriendsItemProps) => {
  const renderEmail = (email: string | null) => {
    if (!email)
      return <span className={css.friendItemContacts}>Not available</span>;
    return (
      <a href={`mailto:${email}`} className={css.friendItemContacts}>
        {email}
      </a>
    );
  };

  const renderAddress = (adress: string | null, addressUrl: string | null) => {
    if (!adress)
      return <span className={css.friendItemContacts}>website only</span>;
    return (
      <a
        href={addressUrl ?? undefined}
        target="_blank"
        className={css.friendItemContacts}
      >
        {`${adress.slice(0, 18)}...`}
      </a>
    );
  };

  const renderPhone = (phone: string | null) => {
    if (!phone)
      return <span className={css.friendItemContacts}>email only</span>;
    return (
      <a href={`tel:${phone}`} className={css.friendItemContacts}>
        {phone}
      </a>
    );
  };

  return (
    <li className={css.frinedItem}>
      <div className={css.imageWrapper}>
        <Image
          src={el.imageUrl}
          alt="Organization"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      </div>
      <TodayWorkTime workDays={el.workDays} className={css.workTime} />
      <div className={css.friendSubBox}>
        <h3 className={css.frinedTitle}>{el.title}</h3>
        <ul className={css.friendListContacts}>
          <li>Email: {renderEmail(el.email)}</li>
          <li>Address: {renderAddress(el.address, el.addressUrl)}</li>
          <li>Phone: {renderPhone(el.phone)}</li>
        </ul>
      </div>
    </li>
  );
};

export default FriendsItem;
