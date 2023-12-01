import "./grid.css";
export default function Main() {
  return (
    <main className="row">
      <div className="left col ">
        <button className="active">All projects</button>
        <button>HTML & CSS</button>
        <button>JS</button>
        <button>React</button>
      </div>

      <div className="right grid  ">
        {["aa", "bb", "cc", "dd"].map((item) => {
          return (
            <div key={item} className="card col card-col">
              <img src="../../../public/1.jpg" alt="" className="img-card " />

              <div className="text-card ">
                <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Appie
                </h3>

                <p style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem accusamus ad praesentium tenetur pariatur velit,
                  dolorum nisi, ipsa volup
                </p>
              </div>

              <div className="box-card row ">
                <div
                  className="social-card row "
                  style={{ marginTop: "0.5rem" }}
                >
                  <i
                    className="fa-solid fa-link"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <i
                    className="fa-brands fa-github"
                    style={{ fontSize: "1.2rem" }}
                  />
                </div>

                <a style={{ fontSize: "1rem", paddingTop: "9px" }}>
                  more &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
