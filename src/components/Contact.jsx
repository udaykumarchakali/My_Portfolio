import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k04o5ix",
        "template_o39hmeo",
        form.current,
        "bISabhYE-c2P8IGbO"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
       (error) => {
  console.log("EMAILJS ERROR:", error);
  alert(`Failed: ${error.text || error.message || "Unknown error"}`);
}
      );
  };

  return (
    <section id="contact" className="section contact-section">

      <div className="container">

        <div className="section-heading">
          <p>Let's Connect</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Let's work together</h3>

            <p>
              Have a project or opportunity? Feel free to get in touch with me.
            </p>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <span>Email</span>
                <p>udaykc.tech@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone />
              <div>
                <span>Phone</span>
                <p>+91 9480903876</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <span>Location</span>
                <p>India</p>
              </div>
            </div>

          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="btn primary-btn">
              Send Message
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;