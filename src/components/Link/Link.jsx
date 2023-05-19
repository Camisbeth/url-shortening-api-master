import Button from "../Button/Button";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import styles from "./Link.module.scss";

function Link({ link }) {
  const [value, copy] = useCopyToClipboard();
  const handleClick = () => {
    copy(link.shortLink);
  };

  return (
    <section className={styles.section}>
      <div className={styles.divLinks}>
        <p className={styles.link}>{link.original} </p>
        <p className={styles.link}>{link.shortLink}</p>
      </div>

      <div className={styles.divButton}>
        <Button
          handleClick={handleClick}
          content={value === link.shortLink ? "copied" : "copy"}
          style={"square"}
        />
      </div>
    </section>
  );
}

export default Link;
