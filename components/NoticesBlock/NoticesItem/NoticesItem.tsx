import Image from "next/image";
import css from "./NoticesItem.module.css";
import { Categories, Notices } from "//types/notices";
import { Icons } from "../../Icons/Icons";

interface NoticesItemProps {
  el: Notices;
}

const NoticesItem = ({ el }: NoticesItemProps) => {
  const renderPrice = (category: Categories) => {
    if (category === "found") {
      return <p className={css.noticesPrice}>Found</p>;
    } else if (category === "free") {
      return <p className={css.noticesPrice}>Free</p>;
    } else if (category === "lost") {
      return <p className={css.noticesPrice}>Lost</p>;
    } else
      return <p className={css.noticesPrice}>${Number(el.price).toFixed(2)}</p>;
  };
  return (
    <li className={css.noticesItem}>
      <div className={css.imageWrapper}>
        <Image
          src={el.imgURL}
          alt={el.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>
      <div className={css.titleSubBox}>
        <h3 className={css.noticesTitle}>{el.title}</h3>
        <div className={css.ratingBox}>
          <Icons id="icon-Star" width={16} height={16} />
          <p className={css.noticesRating}>
            {el.popularity.toString().slice(0, 1)}
          </p>
        </div>
      </div>
      <ul className={css.descriptionList}>
        <li className={css.descriptionItem}>
          <span className={css.descriptionName}>Name</span>
          {el.name}
        </li>
        <li className={css.descriptionItem}>
          <span className={css.descriptionName}>Birthday</span>
          {el.birthday.slice(0, 7)}
        </li>
        <li className={css.descriptionItem}>
          <span className={css.descriptionName}>Sex</span>
          {el.sex}
        </li>
        <li className={css.descriptionItem}>
          <span className={css.descriptionName}>Species</span>
          {el.species}
        </li>
        <li className={css.descriptionItem}>
          <span className={css.descriptionName}>Category</span>
          {el.category}
        </li>
      </ul>
      <p className={css.noticesComment}>{el.comment}</p>
      {renderPrice(el.category)}
      <div className={css.noticesBtn}>
        <button type="button" className={css.learnMoreBtn}>
          Learn More
        </button>
        <button type="button" className={css.addFavoritesBtn}>
          <Icons
            id="icon-heart"
            width={16}
            height={16}
            className={css.iconHeart}
          />
        </button>
      </div>
    </li>
  );
};

export default NoticesItem;
