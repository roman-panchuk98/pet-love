import css from "./NewsList.module.css";
import { New } from "//types/new";
import NewsItem from "../NewsItem/NewsItem";

interface NewsListProps {
  news: New[];
}
const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={css.newsList}>
      {news.map((el) => (
        <NewsItem el={el} key={el._id} />
      ))}
    </ul>
  );
};

export default NewsList;
