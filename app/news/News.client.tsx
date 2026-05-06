"use client";

import { useState } from "react";
import css from "./page.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getNews } from "//lib/api/api";
import NewsList from "../../components/NewsBlock/NewsList/NewsList";
import NewsTitle from "//components/NewsBlock/NewsTitle/NewsTitle";
import SearchField from "//components/NewsBlock/SearchField/SearchField";
import Pagination from "//components/Pagination/Pagination";
import UniversalTitle from "//components/UniversalTitle/UniversalTitle";

const NewsClient = () => {
  const [page, setPage] = useState<number>(1);
  const [searchWord, setSearchWord] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["News", searchWord, page],
    queryFn: () => getNews(searchWord, page),
    placeholderData: keepPreviousData,
  });

  const handleSubmit = () => {
    setSearchWord(inputValue);
    setPage(1);
  };

  const handleClear = () => {
    setInputValue("");
    setSearchWord("");
    setPage(1);
  };

  return (
    <section className={css.container}>
      <div className={css.titleSearchBox}>
        <UniversalTitle title="News" input />
        <SearchField
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          onSubmit={handleSubmit}
          onClear={handleClear}
        />
      </div>

      {data && data.results.length > 0 && <NewsList news={data.results} />}
      {data && data?.totalPages > 1 && (
        <Pagination
          totalPages={data?.totalPages ?? 0}
          page={page}
          onPageChange={setPage}
        />
      )}

      {data && data.results.length === 0 && (
        <p className={css.noNewsFound}> No news found for your query</p>
      )}
    </section>
  );
};

export default NewsClient;
