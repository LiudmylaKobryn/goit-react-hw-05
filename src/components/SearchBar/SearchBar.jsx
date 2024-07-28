import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") return;
    navigate(`/movies?query=${query}`);
  };

  return (
    <div className={s.searchBarWrapper}>
      <h2 className={s.title}>Search for a movie...</h2>
      <form className={s.inputWrapper} onSubmit={handleSubmit}>
        <input
          type="search"
          className={s.input}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
