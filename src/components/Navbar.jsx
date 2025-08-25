import { NavLink } from "react-router-dom";
const Navbar = ({ isLogged }) => {
  /*
  ^ isLogged
  * Dado mockado
  & Descomentar irá forçar exibição da Navbar.
  */ 
  //isLogged = true;
  return <div>{isLogged && <p>navbar</p>}</div>;
};

export default Navbar;
