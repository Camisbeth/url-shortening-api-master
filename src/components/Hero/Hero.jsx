import Button from "../Button/Button";
import styles from "./Hero.module.scss";

function Hero() {
  const getStarted = "Get Started";

  return (
    <section className={styles.sectionMain}>
      <section className={styles.section}>
        <h1 className={styles.title}>More than just shorter links</h1>

        <p className={styles.paragraph}>
          Build your brand's recognition and get detalied insights on how your
          links are performing
        </p>

        <div className={styles.buttonContainer}>
          <Button style="rounded" content={getStarted} />
        </div>
      </section>

      <figure className={styles.figure}>
        <img
          className={styles.subjet}
          src="../../public/images/illustration-working.svg"
        />
      </figure>
    </section>
  );
}

export default Hero;
