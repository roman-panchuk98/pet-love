import axios from "axios";
import { New } from "//types/new";
import { PetOrganization } from "//types/friend";
import { Notices, NoticesQueryParams } from "//types/notices";

interface NewsHttpResponse {
  results: New[];
  page: number;
  perPage: number;
  totalPages: number;
}

interface NoticesHttpResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notices[];
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

export async function getFriends(): Promise<PetOrganization[]> {
  const response = await axios.get<PetOrganization[]>("/friends");
  return response.data;
}

export async function getNotices(
  params: NoticesQueryParams,
): Promise<NoticesHttpResponse> {
  const response = await axios.get<NoticesHttpResponse>("/notices", { params });
  return response.data;
}
