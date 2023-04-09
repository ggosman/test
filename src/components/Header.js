import logo from "../img/logo.png";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
