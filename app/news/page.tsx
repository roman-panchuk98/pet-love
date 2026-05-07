import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getNews } from "//lib/api/api";
import NewsClient from "./News.client";

const News = async () => {
  const queryClient = new QueryClient();

  const page = 1;
  const searchWord = "";

  await queryClient.prefetchQuery({
    queryKey: ["news", searchWord, page],
    queryFn: () => getNews(searchWord, page),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsClient />
    </HydrationBoundary>
  );
};

export default News;
