import "./Hero.css";
import Lottie from "lottie-react";
import laptopAnimation from "../../../public/animation/laptop.json";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero row">
      <div className="text-hero col ">
        <div className="my-photo">
          <img src="/images/HishamSakr.jpg" alt="Hisham Sakr photo" />

          <i
            className="fa-solid fa-certificate "
            style={{
              fontSize: "1rem",
              color: "var(--blue)",
              marginBottom: "0.5rem",
            }}
          ></i>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hisham Sakr
          <br /> React Front End Developer.
        </motion.h1>

        <p className="sub-hero">
          Building dynamic and interactive user interfaces for web applications.
        </p>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/hishamls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
          </a>

          <a
            href="https://www.github.com/hishamls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>

          <a
            href="https://codepen.io/hishamls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-codepen" />
          </a>
        </div>
      </div>

      <div className="image-hero  col">
        <Lottie className="anim-laptop" animationData={laptopAnimation} />;
      </div>
    </section>
  );
}
