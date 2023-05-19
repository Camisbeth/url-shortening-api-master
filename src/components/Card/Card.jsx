import styles from "./Card.module.scss";

function Card({ img, title, paragraph }) {
  return (
    <section className={styles.section}>
      <div className={styles.divImg}>
        <img className={styles.icon} alt="icon" src={img} />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.paragraph}>{paragraph}</p>
    </section>
  );
}

export default Card;
