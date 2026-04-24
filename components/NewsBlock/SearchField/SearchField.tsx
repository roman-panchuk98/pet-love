import { Icons } from "../../Icons/Icons";
import css from "./SearchField.module.css";

interface SearchFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const SearchField = ({
  value,
  onChange,
  onSubmit,
  onClear,
}: SearchFieldProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={css.searchBox}
    >
      <input
        className={css.searchInput}
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <div className={css.iconBox}>
        {value && (
          <button type="button" onClick={onClear}>
            <Icons
              width={18}
              height={18}
              id="icon-cancel"
              stroke="#262626"
              className={css.iconBtnCancel}
            />
          </button>
        )}
        <button type="submit">
          <Icons
            width={18}
            height={18}
            id="icon-search"
            stroke="#262626"
            className={css.iconBtnSearch}
          />
        </button>
      </div>
    </form>
  );
};

export default SearchField;
