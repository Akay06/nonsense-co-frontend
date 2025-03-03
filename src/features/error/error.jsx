import { Link } from "react-router-dom";
import styles from "./error.module.css";
import scareCrow from "../../assets/Scarecrow.png";

const ErrorPage = () => {
  return (
    <>
      <div className={styles.error}>
        <h1 className={styles.nav}>404 NOT FOUND</h1>
        <div className={styles.display}>
          <div className={styles.display__img}>
            <img src={scareCrow} alt="404-Scarecrow" />
          </div>
          <div className={styles.display__content}>
            <h2 className={styles.display__contentInfo}>
              I have bad news for you
            </h2>
            <p className={styles.display__contentText}>
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <Link to="/">
              <button className={styles.btn}>Back to homepage</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
