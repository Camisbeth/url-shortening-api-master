import Card from "../Card/Card";

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
    <section>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are perfoming across the web with our advanced
        statistics dashboard
      </p>
      {cards.map((card, key) => (
        <Card
          img={card.img}
          title={card.title}
          paragraph={card.paragraph}
          key={key}
        />
      ))}
    </section>
  );
}

export default Statistics;
