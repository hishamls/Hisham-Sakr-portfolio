import "./Footer.css";

export default function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer row">
      <div className="contacts row">
        <i className="fa-solid fa-phone" /> +1 (587) 646-9710
      </div>
      <p>
        &#169;<span>{currYear}</span> by <em>Hisham Sakr.</em> All rights
        reserved.
      </p>
    </footer>
  );
}
