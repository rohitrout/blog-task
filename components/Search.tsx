"use client";
import "./Search.scss";
import { useState } from "react";
import { searchAlgolia } from "@/utils/stored";
import SearchResults from "@/components/SearchResults";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [seeSearchBox, setSeeSearchBox] = useState(false);

  const handleSearch = async () => {
    const searchResults: any = await searchAlgolia(query);
    setSeeSearchBox(true);
    setResults(searchResults);
    console.log(searchResults);
    console.log(query);
  };
  const handleChange = (e: any) => {
    setQuery(e.target.value);
    handleSearch();
  };

  const handleLinkClick = () => {
    setSeeSearchBox(false);
    setResults([]);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setSeeSearchBox(true)}
        // onBlur={() => setSeeSearchBox(false)}
      />
      <button onClick={handleSearch}>Search</button>
      {seeSearchBox && (
        <SearchResults results={results} onLinkClick={handleLinkClick} />
      )}
    </div>
  );
}
