import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

export default function TabsEspaco() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "endereco") {
      return location.pathname === "/" || location.pathname === "/endereco";
    }
    return location.pathname === `/${path}`;
  };

  return (
    <>
      {/* ABAS */}
      <div className="tabs-container">
        <NavLink
          to="/endereco"
          className={`tab-btn ${isActive("endereco") ? "active" : ""}`}
        >
          Endereço
        </NavLink>

        <NavLink
          to="/sobre"
          className={`tab-btn ${isActive("sobre") ? "active" : ""}`}
        >
          Sobre espaço
        </NavLink>

        <NavLink
          to="/politica"
          className={`tab-btn ${isActive("politica") ? "active" : ""}`}
        >
          Política
        </NavLink>
      </div>
    </>
  );
}
