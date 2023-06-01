import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = () => {
    emailjs
      .send(
        "graydonwasil.com",
        "template_6ylng1i",
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        "b4sh8m9ouu6sNU3RX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="flex flex-grow flex-col items-center justify-center h-screen text-neutral-content segment"
      id="contact"
    >
      <h1
        className="text-5xl font-bold p-4"
        data-aos="fade-down"
        data-aos-delay="1000"
      >
        Contact Me
      </h1>
      <div
        className="card shadow-xl bg-neutral text-nuetral-content p-5 rounded-lg w-96"
        data-aos="fade-up"
      >
        <div className="form-control max-w-md" data-aos="fade-up">
          <label className="label flex-col">
            <span className="label-text text-xl">Name</span>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full max-w-md text-lg bg-nuetral-content"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>
        <div className="form-control max-w-md" data-aos="fade-left">
          <label className="label flex-col">
            <span className="label-text text-xl">Email</span>
            <input
              type="text"
              placeholder="youremail@website.com"
              className="input input-bordered w-full max-w-md text-lg bg-nuetral-content"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="form-control max-w-md" data-aos="fade-right">
          <label className="label flex-col">
            <span className="label-text text-xl">Message</span>
            <textarea
              placeholder="Message"
              className="textarea h-24 textarea-bordered w-full max-w-md text-lg bg-nuetral-content"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </label>
        </div>
        <button
          className="btn btn-primary w-full max-w-md mt-4 mb-2"
          onClick={handleForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
