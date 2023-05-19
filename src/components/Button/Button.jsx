import styles from "./Button.module.scss";

function Button({ style, content, handleClick }) {
  return (
    <button onClick={handleClick} className={styles[style]}>
      {content}
    </button>
  );
}

export default Button;
