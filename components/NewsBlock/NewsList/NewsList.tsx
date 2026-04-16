import { New } from "//types/new";
import css from "./NewsList.module.css";
import Image from "next/image";

interface NewsListProps {
  news: New[];
}
const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={css.newsList}>
      {news.map((el) => (
        <li key={el._id} className={css.newsItem}>
          <div className={css.imageWrapper}>
            <Image
              alt="news"
              src={el.imgUrl}
              fill
              loading="lazy"
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
      ))}
    </ul>
  );
};

export default NewsList;
