import "./Footer.css";

export default function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer row">
      <div className="contacts row">
        <i className="fa-solid fa-phone" /> 00201090209759
      </div>
      <p>
        &#169;<span>{currYear}</span> by <em>Hisham Sakr.</em> All rights
        reserved.
      </p>
    </footer>
  );
}
