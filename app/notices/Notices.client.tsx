"use client";
import css from "./page.module.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NoticesQueryParams } from "//types/notices";
import { getNotices } from "//lib/api/api";
import NoticesList from "//components/NoticesBlock/NoticesList/NoticesList";

const NoticesClient = () => {
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<NoticesQueryParams>({});

  const { data } = useQuery({
    queryKey: ["notices", page, filters],
    queryFn: () => getNotices({ page, ...filters }),
  });

  return (
    <section className={css.container}>
      <NoticesList notices={data?.results ?? []} />
    </section>
  );
};
export default NoticesClient;
