import s from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={s.searchBarWrapper}>
      <h2 className={s.title}>Search for a movie...</h2>
      <div className={s.inputWrapper}>
        <input type="search" className={s.input} placeholder="Search..." />
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
