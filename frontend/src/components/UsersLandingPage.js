import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import MyContext from "../context/MyContext";

import "../styles/UsersLandingPage.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import brandLogo from "../assets/brandLogo.png";
import brandLogo2 from "../assets/brandLogo2.png";

// Font Awesome Icons
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; */

/* const burgerIcon = <FontAwesomeIcon icon={faBars} />; */

export default function UsersLandingPage() {
  // calender
  /* const [value, onChange] = useState(new Date()); */

  const { user } = useContext(MyContext);
  /* const navigate = useNavigate(); */

  /*  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }; */

  const isActive = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgb(82, 219, 212)" : "",
      borderRadius: isActive ? "5px" : "",
    };
  };

  return (
    <div>
      {user ? (
        <>
          <div className="header">
            <div className="burger-menu">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div className="navbar-brand" href="#A">
                    <NavLink className="NavLink" to="/home/kanban" href="#1">
                      <img
                        classname="brand-logo"
                        alt=""
                        src={brandLogo}
                        style={{ height: "100px" }}
                      ></img>
                    </NavLink>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                      <li>
                        <button className="dropdown-item">
                          <NavLink
                            className="burger-navlink"
                            style={isActive}
                            to="/home/profile"
                          >
                            {" "}
                            Profile{" "}
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item">
                          <NavLink
                            className="burger-navlink"
                            style={isActive}
                            to="/home/kanban"
                          >
                            {" "}
                            Kanban{" "}
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item">
                          <NavLink
                            style={isActive}
                            className="burger-navlink"
                            to="/home/todo"
                          >
                            {" "}
                            To-Do List{" "}
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item">
                          <NavLink
                            style={isActive}
                            className="burger-navlink"
                            to="/home/notes"
                          >
                            {" "}
                            Notes{" "}
                          </NavLink>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div id="header-logo">
              <NavLink to="/home">
                {" "}
                <img
                  classname="brand-logo"
                  alt=""
                  src={brandLogo2}
                  style={{ height: "200px" }}
                ></img>{" "}
              </NavLink>{" "}
            </div>

            {/* <button onClick={logout}>Logout </button> */}
          </div>

          <div className="navigation">
            <div>
              <NavLink style={isActive} className="navlink" to="/home/profile">
                {" "}
                Profile{" "}
              </NavLink>
              <br></br>
            </div>
            <div className="navlinks">
              <NavLink style={isActive} className="navlink" to="/home/kanban">
                {" "}
                Kanban{" "}
              </NavLink>
              <br></br>
              <NavLink style={isActive} className="navlink" to="/home/todo">
                {" "}
                To-Do List{" "}
              </NavLink>
              <br></br>
              <NavLink style={isActive} className="navlink" to="/home/notes">
                {" "}
                Notes{" "}
              </NavLink>
              <br></br>
            </div>
            <div className="calendar">
              <Calendar></Calendar>
            </div>
          </div>

          <div className="outlet-feature-container">
            <Outlet></Outlet>
          </div>
        </>
      ) : (
        <>
          <nav>
            <NavLink to="/login"> Login </NavLink>
            <br></br>
            <NavLink to="/users"> Register </NavLink>
            <br></br>
          </nav>
        </>
      )}
    </div>
  );
}
