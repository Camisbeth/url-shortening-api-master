import styles from "./Card.module.scss";

function Card() {
  const cards = [
    {
      img: "../../public/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      paragraph:
        "Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content",
    },
    {
      img: "../../public/images/icon-detailed-records.svg",
      title: "Detailed Records",
      paragraph:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      img: "../../public/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      paragraph:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <section className={styles.section}>
      {cards.map((card, key) => {
        return (
          <section className={styles.sectionCard} key={key}>
            <div className={styles.divCircle}></div>

            <h3 className={styles.title}> {card.title}</h3>

            <p className={styles.paragraph}>{card.paragraph}</p>

            <figure className={styles.figure}>
              <img className={styles.img} src={card.img} />
            </figure>
          </section>
        );
      })}
    </section>
  );
}

export default Card;
