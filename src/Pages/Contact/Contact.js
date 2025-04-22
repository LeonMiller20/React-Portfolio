import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Home = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0d40b377-dc33-4a83-a015-5fe849dfdcaf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Succsess!",
        text: "Message sent succsessfully!",
        icon: "success",
      });
    }
  };
  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Home;
