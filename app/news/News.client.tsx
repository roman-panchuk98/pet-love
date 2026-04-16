"use client";

import React, { useState } from "react";
import css from "./page.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getNews } from "//lib/api/api";
import NewsList from "../../components/NewsBlock/NewsList/NewsList";
import NewsTitle from "//components/NewsBlock/NewsTitle/NewsTitle";
import SearchField from "//components/NewsBlock/SearchField/SearchField";

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
    <div className={css.container}>
      <NewsTitle />
      <SearchField
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />
      {data && data.results.length > 0 && <NewsList news={data.results} />}
    </div>
  );
};

export default NewsClient;
