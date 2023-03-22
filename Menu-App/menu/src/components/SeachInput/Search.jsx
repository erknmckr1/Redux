import React, { useState } from "react";
import "./search.css";
function Search({ data, setData }) {
  const [searchKey, setSearchKey] = useState("");
  const [isFocused, setİsFocused] = useState(false);
  console.log(data);
  const handleSearch = (e) => {
    const searchKey = e.target.value.toLowerCase()
    setSearchKey(searchKey);
    setData(
        data.filter((item) => item.title.toLowerCase().includes(searchKey))
      );
  };

 //Use Effect ıle dene 

  const handleFocus = () => {
    setİsFocused(true);
  };
  const handleBlur=()=>{
    setİsFocused(false)
  }
  return (
    <div >
      <div>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search"
          value={searchKey}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`searchDiv ${isFocused ? "focused" : "unfocused"}`}
        />
      </div>
    </div>
  );
}

export default Search;
