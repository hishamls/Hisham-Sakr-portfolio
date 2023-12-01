import { useState, useEffect } from "react";
import "./Up.css";

export default function Up() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setAppear(true);
      } else setAppear(false);
    });
  }, [appear]);

  return (
    <a
      className="up"
      href="#up"
      style={{ opacity: appear ? 1 : 0, transition: "1s" }}
    >
      <i className="fa-solid fa-circle-up"></i>
    </a>
  );
}
