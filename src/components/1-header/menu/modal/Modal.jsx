/* eslint-disable react/prop-types */
import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

function Background(props) {
  return <div className="background" onClick={props.onClose} />;
}
function Foreground(props) {
  return (
    <motion.nav
      className="foreground"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 1.1, bounce: 0.5, type: "spring" }}
    >
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
    </motion.nav>
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
