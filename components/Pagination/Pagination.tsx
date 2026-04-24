import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";
import { Icons } from "../Icons/Icons";

interface PaginationProps {
  totalPages: number;
  page: number;
  onPageChange: (selected: number) => void;
}

export default function Pagination({
  totalPages,
  page,
  onPageChange,
}: PaginationProps) {
  if (totalPages === 0) {
    return null;
  }

  const handlePageChange = (selected: number) => {
    onPageChange(selected);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={css.paginationContainer}>
      <button
        disabled={page === 1}
        onClick={() => handlePageChange(1)}
        className={`${css.firstLastBtn} ${page === 1 ? css.disabled : ""}`}
      >
        <Icons
          id="icon-chevron-left"
          fill="none"
          width={20}
          height={20}
          className={css.svgFirstLastIcon}
        />

        <Icons
          id="icon-chevron-left"
          fill="none"
          width={20}
          height={20}
          className={`${css.svgFirstLastIcon} ${css.svgSecond}`}
        />
      </button>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        breakLabel="..."
        marginPagesDisplayed={0}
        onPageChange={({ selected }) => handlePageChange(selected + 1)}
        forcePage={page - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel={
          <Icons
            id="icon-chevron-right"
            fill="none"
            stroke="#262626"
            width={20}
            height={20}
            className={css.nextPreviousBtn}
          />
        }
        previousLabel={
          <Icons
            id="icon-chevron-left"
            fill="none"
            stroke="#262626"
            width={20}
            height={20}
            className={css.nextPreviousBtn}
          />
        }
        breakClassName={css.breakBtn}
        disabledClassName={css.disabled}
      />

      <button
        disabled={page === totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`${css.firstLastBtn} ${page === totalPages ? css.disabled : ""}`}
      >
        <Icons
          id="icon-chevron-right"
          fill="none"
          width={20}
          height={20}
          className={css.svgFirstLastIcon}
        />

        <Icons
          id="icon-chevron-right"
          fill="none"
          width={20}
          height={20}
          className={`${css.svgFirstLastIcon} ${css.svgSecond}`}
        />
      </button>
    </div>
  );
}
