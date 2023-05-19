import Card from "../Card/Card";
import styles from "./Statistics.module.scss";

function Statistics() {
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
      <h2 className={styles.title}>Advanced Statistics</h2>

      <p className={styles.paragraph}>
        Track how your links are perfoming across the web with our advanced
        statistics dashboard
      </p>

      <div className={styles.divCard}>
        {cards.map((card, key) => (
          <Card
            img={card.img}
            title={card.title}
            paragraph={card.paragraph}
            key={key}
          />
        ))}
      </div>
    </section>
  );
}

export default Statistics;
