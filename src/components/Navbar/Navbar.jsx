import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

function Navbar() {
  const signUp = "Sign Up";

  return (
    <nav className={styles.nav}>
      <h2 className={styles.title}>Shortly</h2>

      <section className={styles.sectionList}>
        <ul className={styles.list}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>

        <ul className={`${styles.list} ${styles.listWithButton}`}>
          <li>Login</li>
          <div className={styles.buttonContainer}>
            <Button style="rounded" content={signUp} />
          </div>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
