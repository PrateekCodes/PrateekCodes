/** @jsx jsx */
import logo from "../../../../assets/logo.png";
import { jsx } from "theme-ui";

export default function Logo() {
  return (
    <div>
      <img src={logo} alt={"logo"} style={{ verticalAlign: "middle" }}></img>
      <h1
        sx={{
          display: "inline-block",
          color: "primary",
          fontSize: "23px",
          verticalAlign: "middle",
          transition: "colorModeTransition",
          "@media screen and (max-width:640px)": {
            fontSize: "14px"
          }
        }}
      >
        Prateek <span style={{ color: "#7A8085" }}>Arora</span>
      </h1>
    </div>
  );
}
