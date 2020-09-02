import * as React from "react";
import { SearchSelector, WhereInput, WhenInput } from "./Parts";
import css from "./SearchBox.module.scss";

export const SearchBox: React.FC = () => {
  return (
    <div className={css.searchBox}>
      <SearchSelector></SearchSelector>
      <WhereInput></WhereInput>
      <WhenInput></WhenInput>
    </div>
  );
};
