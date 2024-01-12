import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fox from "../Models/Fox";
import { Canvas } from "@react-three/fiber";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentAnimation("hit");
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
      setCurrentAnimation("idle");
      toast.success(`Recieved your message 🥳 `);
    } catch (error) {
      setLoading(false);
      setCurrentAnimation("idle");
      toast.error("Couldnot receive your message 😢 ");
    }
  };

  return (
    <section className="formContainer relative top-14 p-2 flex justify-around items-center flex-col md:flex-row ">
      <form
        ref={formRef}
        className="contactForm flex-col flex gap-4 w-full md:w-1/2 mt-4 shadow-2xl rounded-md p-3 bg-gradient-to-r from-cyan-500 to-blue-500 "
        onSubmit={handleSubmit}
      >
        <div className="font-bold text-lg text-center ">Get in Touch 👋</div>
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
      <div className="md:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.5,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
