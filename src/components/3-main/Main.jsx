import { useState } from "react";
import "./Main.css";
import { myProjects } from "./MyProjects";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [isActive, setIsActive] = useState("all");

  const [category, setCategory] = useState(myProjects);

  return (
    <main className="row main " id="proj">
      <div className="left col ">
        <button
          onClick={() => {
            setIsActive("all");
            setCategory(myProjects);
          }}
          className={isActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setIsActive("css");
            const dadArr = myProjects.filter((pro) => {
              const sonArr = pro.category.filter((i) => {
                return i === "CSS";
              });
              return sonArr[0] === "CSS";
            });

            setCategory(dadArr);
          }}
          className={isActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setIsActive("js");

            const dadArr = myProjects.filter((pro) => {
              const obj = pro.category.find((i) => {
                return i === "JS";
              });
              return obj === "JS";
            });

            setCategory(dadArr);
          }}
          className={isActive === "js" ? "active" : null}
        >
          JS
        </button>

        <button
          onClick={() => {
            setIsActive("react");
            const dadArr = myProjects.filter((pro) => {
              const sonArr = pro.category.filter((i) => {
                return i === "React";
              });
              return sonArr[0] === "React";
            });

            setCategory(dadArr);
          }}
          className={isActive === "react" ? "active" : null}
        >
          React
        </button>
      </div>

      <div className="right row  ">
        <AnimatePresence>
          {category.map((item) => {
            return (
              <motion.div
                key={item.imgPath}
                className="card col card-col"
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                // exit={{ transform: "scale(0)" }}
                transition={{ type: "spring", damping: 10, stiffness: 50 }}
              >
                <img src={item.imgPath} alt="" className="img-card " />

                <div className="text-card ">
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                    {item.subtitle}
                  </p>
                </div>

                <div className="box-card row ">
                  <div
                    className="social-card row "
                    style={{ marginTop: "0.5rem" }}
                  >
                    <a href={item.link} target="blank">
                      <i
                        className="fa-solid fa-link"
                        style={{ fontSize: "1.2rem" }}
                      />
                    </a>

                    <a href={item.github} target="blank">
                      <i
                        className="fa-brands fa-github"
                        style={{ fontSize: "1.2rem" }}
                      />
                    </a>
                  </div>

                  <a
                    style={{ fontSize: "1rem", paddingTop: "9px" }}
                    href={item.linkedIn}
                    target="blank"
                  >
                    more &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}
