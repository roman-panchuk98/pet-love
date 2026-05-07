import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getNotices } from "//lib/api/api";
import { NoticesQueryParams } from "//types/notices";
import NoticesClient from "./Notices.client";

const Notices = async () => {
  const queryClient = new QueryClient();

  const page = 1;
  const initialFilters: NoticesQueryParams = {};

  await queryClient.prefetchQuery({
    queryKey: ["notices", page, initialFilters],
    queryFn: () => getNotices({ page: page, ...initialFilters }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoticesClient />
    </HydrationBoundary>
  );
};

export default Notices;
