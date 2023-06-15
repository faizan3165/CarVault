"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import Alert from "./Alert";

const SearchBar = ({ setManufacturer, setModel }: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      setAlertMsg("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      {alertMsg && <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />}
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model icon"
          width={25}
          height={25}
          className="absolute width-[25px] h-[20px] ml-4"
        />

        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
