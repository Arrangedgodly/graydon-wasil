const Contact = () => {
  return (
    <div
      className="flex flex-grow flex-col items-center justify-center h-screen"
      id="contact"
    >
      <h1 className="text-4xl font-bold p-4" data-aos='fade-down' data-aos-delay='1000'>Contact Me</h1>
      <div className="card shadow-xl bg-secondary p-5 rounded-lg w-96" data-aos='fade-up'>
        <div className="form-control max-w-md" data-aos='fade-left'>
          <label className="label flex-col">
            <span className="label-text text-xl">Email</span>
            <input
              type="text"
              placeholder="youremail@website.com"
              className="input input-bordered w-full max-w-md text-lg bg-secondary-content"
            />
          </label>
        </div>
        <div className="form-control max-w-md" data-aos='fade-right'>
          <label className="label flex-col">
            <span className="label-text text-xl">Message</span>
            <textarea
              placeholder="Message"
              className="textarea h-24 textarea-bordered w-full max-w-md text-lg bg-secondary-content"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
