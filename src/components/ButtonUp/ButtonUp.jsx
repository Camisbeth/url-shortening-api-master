import { useEffect, useState } from "react";

function ButtonUp() {
  const [upButton, setUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setUpButton(true);
      } else {
        setUpButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <>{upButton && <Button handleClick={scrollUp} />}</>;
}

export default ButtonUp;
