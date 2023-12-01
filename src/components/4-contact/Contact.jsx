import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contAnimation from "../../../public/animation/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xayggpyb");

  if (state.succeeded) {
    return (
      <div className="success row">
        <Lottie
          className="done-ani"
          loop={false}
          animationData={doneAnimation}
        />
        <p className="confirm">Your message has been sent successfully!</p>
      </div>
    );
  }

  return (
    <section className="contact-me" id="cont">
      <div className="header">
        <div className="row">
          <i className="fa-regular fa-envelope" />
          <h2>Contact me</h2>
        </div>

        <p className="subtitle">Please feel free for more information</p>
      </div>

      <div className="row cont-body">
        <form onSubmit={handleSubmit} action="" className="col  form">
          <div className="email row">
            <label htmlFor="email">E mail</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="message row">
            <label htmlFor="message">Message</label>
            <textarea required name="message" id="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting.." : "Submit"}
          </button>
        </form>

        <div className="  anim ">
          <Lottie className="contact-anim" animationData={contAnimation} />
        </div>
      </div>
    </section>
  );
}
