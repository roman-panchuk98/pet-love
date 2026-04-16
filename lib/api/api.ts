import axios from "axios";
import { New } from "//types/new";

interface NewsHttpResponse {
  results: New[];
  page: number;
  perPage: number;
  totalPages: number;
}

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export async function getNews(
  query: string,
  page: number,
): Promise<NewsHttpResponse> {
  const response = await axios.get<NewsHttpResponse>("/news", {
    params: {
      keyword: query,
      page: page,
    },
  });
  return response.data;
}
