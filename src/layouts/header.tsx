import { FC, Fragment } from "react";

export interface headerProps {}

const HeaderComponent: FC<{
  children: string;
}> = (props) => {
  return (
    <div style={{ paddingLeft: 10, cursor: "pointer" }}>{props.children}</div>
  );
};

export const Header: FC<headerProps> = (props) => {
  const LeftHeader = (
    <div style={{ display: "flex" }}>
      <span style={{ fontWeight: "bold" }}>Hacker News</span>
      <HeaderComponent>News</HeaderComponent>
      <HeaderComponent>|</HeaderComponent>
      <HeaderComponent>Blog</HeaderComponent>
    </div>
  );
  const RightHeader = (
    <div>
      <a>Login</a>
    </div>
  );
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#FF6600",
          display: "flex",
          alignItems: "center",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{LeftHeader}</div>
          <div>{RightHeader}</div>
        </div>
      </div>
    </Fragment>
  );
};
