import React, { ChangeEvent, FormEvent, useRef } from "react";
import "./TunesSearchForm.scss";
import { debounce } from "lodash";

type Props = {
  onSearch: (query: string) => void;
};

const TunesSearchForm = (props: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchForMusic();
  }, 500);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForMusic();
  };

  const searchForMusic = () => {
    let searchString = searchInput.current?.value;
    if (searchString) props.onSearch(searchString);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="I want to listen..."
        type="text"
        ref={searchInput}
        onChange={handleInput}
        className="search"
        autoFocus
      />
    </form>
  );
};

export default TunesSearchForm;
