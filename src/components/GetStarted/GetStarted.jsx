import Button from "../Button/Button";
import styles from "./GetStarted.module.scss";

function GetStarted() {
  const getStarted = "Get Started";

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Boost your links today</h2>

      <div className={styles.divButton}>
        <Button style={"rounded"} content={getStarted} />
      </div>

      <figure className={styles.figure}>
        <img src="../../public/images/bg-boost-desktop.svg" />
      </figure>
    </section>
  );
}

export default GetStarted;
