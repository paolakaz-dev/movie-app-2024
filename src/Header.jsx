import { Route, Routes, Link, useLocation } from "react-router-dom"
import Badge from "./Badge"


function Header() {

    const location = useLocation();

    console.log(location)
    return (
        <header className="navigation">
          <div className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">
                <h1>MovieApp</h1>
              </Link>
          </div>
          <div className={location.pathname === "/cart" ? "active" : ""}>
              <Badge />
          </div>
        </header>
    )
}

export default Header