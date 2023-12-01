/* eslint-disable react/prop-types */
import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Background(props) {
  return <div className="background" onClick={props.onClose} />;
}
function Foreground(props) {
  return (
    <nav className="foreground">
      <button className="close-btn" onClick={props.onClose}>
        <i className="fa-solid fa-xmark" />
      </button>

      <ul className="menu ">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="#proj" onClick={props.onClose}>
            Projects{" "}
          </a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="#cont" onClick={props.onClose}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
const portalElement = document.getElementById("modal-overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Background onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Foreground onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
}
