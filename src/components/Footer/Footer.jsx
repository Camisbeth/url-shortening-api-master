import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Shortly</h2>

      <ul className={styles.list}>
        <p className={styles.titleList}>Features</p>
        <li>
          <a>Link Shortening</a>
        </li>
        <li>
          <a>Branded Links</a>
        </li>
        <li>
          <a>Analytics</a>
        </li>
      </ul>

      <ul className={styles.list}>
        <p className={styles.titleList}>Resources</p>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Developers</a>
        </li>
        <li>
          <a>Support</a>
        </li>
      </ul>

      <ul className={styles.list}>
        <p className={styles.titleList}>Company</p>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Our Team</a>
        </li>
        <li>
          <a>Careers</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>

      <section className={styles.imagesSocialMedia}>
        <img src="../../public/images/linkedin.png" />
        <img src="../../public/images/github.png" />
        <img src="../../public/images/gorjeo.png" />
      </section>
    </footer>
  );
}

export default Footer;
