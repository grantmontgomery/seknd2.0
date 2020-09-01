import * as React from "react";
import css from "./MobileHamburger.module.scss";

export const MobileHamburger: React.FC = () => {
  const [state, setState] = React.useState<{ tapped: boolean }>({
    tapped: false,
  });
  return (
    <div
      className={`${css.hamburger} ${state.tapped ? css.exit : null}`}
      onClick={() =>
        state.tapped ? setState({ tapped: false }) : setState({ tapped: true })
      }
    >
      <div className={css.topLine}></div>
      <div className={css.middleLine}></div>
      <div className={css.bottomLine}></div>
    </div>
  );
};
