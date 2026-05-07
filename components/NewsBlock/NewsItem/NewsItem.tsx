import css from "./NewsItem.module.css";
import Image from "next/image";
import { New } from "//types/new";

interface NewsItemProps {
  el: New;
}

const NewsItem = ({ el }: NewsItemProps) => {
  return (
    <li className={css.newsItem}>
      <div>
        <div className={css.imageWrapper}>
          <Image
            alt="news"
            src={el.imgUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="eager"
            style={{
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className={css.information}>
          <h3 className={css.titleNew}>{el.title}</h3>
          <p className={css.textNew}>{el.text}</p>
        </div>
      </div>
      <div className={css.dateBox}>
        <p className={css.createDateNew}>{el.date.slice(0, 10)}</p>
        <a
          href={el.url}
          className={css.linkMore}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
