import * as React from "react";
import css from "./DateParts.module.scss";
export const DateParts: React.FC<{ location: string }> = ({ location }) => {
  return <div className={css.dateParts}></div>;
};
