import * as React from "react";
import { SearchSelector } from "./Parts";
import { WhereInput } from "./Parts";
import css from "./SearchBox.module.scss";

export const SearchBox: React.FC = () => {
  return (
    <div className={css.searchBox}>
      <SearchSelector></SearchSelector>
      <WhereInput></WhereInput>
    </div>
  );
};
