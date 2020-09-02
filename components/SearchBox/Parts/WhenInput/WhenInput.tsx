import * as React from "react";
import DateTimePicker from "react-datetime-picker";
import css from "./WhenInput.module.scss";

export const WhenInput: React.FC = () => {
  return (
    <div className={css.when}>
      <label htmlFor="">When are you meeting?</label>
      {/* <DateTimePicker></DateTimePicker>
      <DateTimePicker></DateTimePicker> */}
    </div>
  );
};
