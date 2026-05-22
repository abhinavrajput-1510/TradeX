import { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Menu = () => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleClickMenu = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "2rem" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleClickMenu(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleClickMenu(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleClickMenu(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleClickMenu(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleClickMenu(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleClickMenu(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <div className="profile-dropdown-item">
                  <AccountCircleIcon />
                  <li>Profile</li>
                </div>
                <div className="profile-dropdown-item">
                  <LogoutIcon />
                  <li>Logout</li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
