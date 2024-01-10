import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICEID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,
          to_name: "Krishna",
          from_email: form.email,
          to_email: "mahtok422@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLICKEY
      );
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(`Error in sending mail ${error}`);
    }
  };

  return (
    <section className="formContainer relative top-14 p-2 flex justify-around items-center flex-col ">
      <div className="font-bold text-lg ">Get in Touch 👋</div>
      <form
        ref={formRef}
        className="contactForm flex-col flex gap-4 w-1/2 mt-4 shadow-2xl rounded-md p-3 bg-gradient-to-r from-cyan-500 to-blue-500 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ">
          <label className="font-semibold">Name</label>
          <input
            className="h-10 rounded-md px-1 focus:outline-none bg-transparent placeholder:text-black border-b placeholder:font-thin"
            placeholder="John"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Email</label>
          <input
            className="h-10 rounded-md px-1 focus:outline-none bg-transparent placeholder:text-black border-b
            placeholder:font-thin"
            type="email"
            placeholder="john@gmail.com"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Message</label>
          <textarea
            rows={4}
            className="h-20 rounded-md px-1 focus:outline-none resize-none bg-transparent placeholder:text-black placeholder:font-thin border-b "
            placeholder="I am just a few types away"
            name="message"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-around mt-3">
          <button
            type="submit"
            className={`py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
