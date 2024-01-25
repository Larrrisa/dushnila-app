import LogoImg from "../images/Cover.png";
import logo from "../styles/logo.css";

export default function Logo() {
  return (
    <div className="sidebar-logo">
      <img className="logo" src={LogoImg} />
    </div>
  );
}
