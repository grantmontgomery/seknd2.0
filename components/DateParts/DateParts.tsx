import * as React from "react";
import css from "./DateParts.module.scss";
export const DateParts: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className={css.dateParts}>
      <div className={css.partsWrapper}>
        <label htmlFor="">Date Parts</label>
        <div className={css.radioWrapper}>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
        <input type="text" placeholder="Cant" />
      </div>
      <div className={css.modal}></div>
    </div>
  );
};
