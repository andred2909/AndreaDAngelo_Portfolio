import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const isAndroid = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return true;
    } else {
      return false;
    }
  }

  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_jgii46r',
      'template_jktfjbd',
      {
        from_name: form.name,
        to_name: "Andrea",
        from_email: form.email,
        to_email: "dangeloandrea1999@gmail.com",
        message: form.message
      },
      'cdUNBRprqqtgFRk-E'
    )
    .then(() => {
      setLoading(false)
      alert("Thank you for your message! I'll get back to you as soon as possible.")
      setForm({
        name: "",
        email: "",
        message: ""
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert("Something went wrong. Please try again later.")
      })
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your e-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me more about you!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"  
            className="bg-tertiary py-3 px-8 text-white outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send!"}
          </button>
        </form>
      </motion.div>

      {isAndroid() ? null : <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>}
    </div>
  )
}

export default SectionWrapper(Contact, "contact")