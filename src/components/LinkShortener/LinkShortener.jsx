import { useState } from "react";
import Button from "../Button/Button";
import styles from "./LinkShortener.module.scss";
import Link from "../Link/Link";

function LinkShortener() {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);
  const shortenIt = "Shorten It!";

  const enterLink = (e) => {
    if (e.key != "Enter") return;
    handleLinks();
  };

  const handleLinks = async () => {
    try {
      const promess = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      const response = await promess.json();
      console.log(response);

      if (!response.ok) {
        alert("Error al cortar el link");
        return;
      }

      setInput("");
      setLinks([
        ...links,
        {
          original: response.result.original_link,
          shortLink: response.result.short_link,
        },
      ]);
    } catch (error) {
      alert("Error al cortar el link");
    }
  };

  return (
    <section className={styles.sectionMain}>
      <section className={styles.section}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={enterLink}
          className={styles.input}
        ></input>

        <div className={styles.divContainer}>
          <Button
            handleClick={handleLinks}
            style={"square"}
            content={shortenIt}
          />
        </div>

        <figure className={styles.figure}>
          <img src="../../public/images/bg-boost-desktop.svg" />
        </figure>
      </section>

      <section className={styles.links}>
        {links.length > 0 &&
          links.map((link, key) => <Link link={link} key={key} />)}
      </section>
    </section>
  );
}

export default LinkShortener;
