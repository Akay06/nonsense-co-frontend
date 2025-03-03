import { NavLink } from "react-router";
import styles from "./navbar.module.css";
import logoLight from "../../assets/logo-light.jpg";
import { SearchOutlined } from "@ant-design/icons";
import { SignInButton } from "@clerk/clerk-react";

function navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logoLight} alt="logo" />
          </NavLink>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/">Men</NavLink>
          <NavLink to="/">Women</NavLink>
          <NavLink to="/">Accessories</NavLink>
          <NavLink to="/">Sneakers</NavLink>
        </div>
      </div>
      <div className={styles.navRight}>
        <div className={styles.searchbar}>
          <SearchOutlined style={{ padding: "0 0.5rem" }} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search by products"
          />
        </div>
        <div className={styles.userOptions}>
          <SignInButton className={styles.loginButton} mode="modal">
            Login
          </SignInButton>
        </div>
      </div>
    </nav>
  );
}
export default navbar;
