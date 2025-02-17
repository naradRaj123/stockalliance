"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import axios from "axios";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
  agree: boolean;
}

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    agree: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let formIsValid = true;
    let errors = {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
      agree: "",
    };

    if (!formData.name) {
      errors.name = "Full name is required";
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = "Email address is required";
      formIsValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
      formIsValid = false;
    }

    if (!formData.subject) {
      errors.subject = "Subject is required";
      formIsValid = false;
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
      formIsValid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      formIsValid = false;
    }

    if (!formData.agree) {
      errors.agree = "You must agree to our terms";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;
    let value: string | boolean;

    if (type === "checkbox") {
      value = (e.target as HTMLInputElement).checked;
    } else {
      value = (e.target as HTMLTextAreaElement).value;
    }

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {

        console.log("SENDING DATA >> ",formData)
        await axios.post("https://Stock Allianceweb.onrender.com/api/contact", formData);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
          agree: false,
        });
      } catch (error) {
        alert(
          "An error occurred while sending your message. Please try again.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#041b0e]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-Stock Alliance-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>


              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">


                  <div className="relative w-full lg:w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-light">{errors.name}</p>}
                  </div>


                  <div className="relative w-full lg:w-1/2">

                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-light">{errors.email}</p>
                    )}
                  </div>
                  </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">

                  <div className="relative w-full lg:w-1/2">

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500 font-light">
                        {errors.subject}
                      </p>
                    )}

                  </div>


                  <div className="relative w-full lg:w-1/2">

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 font-light">{errors.phone}</p>
                    )}
                  </div>
                  </div>

                <div className="mb-11.5 flex">

                  <div className="relative w-full lg:w-1/2">

                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-light">{errors.message}</p>
                    )}
                  </div>
                  </div>

                  <div className="flex flex-wrap gap-4 xl:justify-between ">
                    <div className="mb-4 flex md:mb-0">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <span
                        className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48058 7.39426 3.29304 7.20679L0.293035 4.20679C0.105505 4.01926 0.000183105 3.76495 0.000183105 3.49979C0.000183105 3.23462 0.105505 2.98031 0.293035 2.79279C0.480562 2.60532 0.734871 2.49999 1.00004 2.49999C1.26521 2.49999 1.51951 2.60532 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48056 0.60532 8.73487 0.49999 9.00004 0.49999C9.26521 0.49999 9.51951 0.60532 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>

                      <label
                        htmlFor="default-checkbox"
                        className="pl-2.5 dark:text-white"
                      >
                        I agree to the{" "}
                        <span className="text-primary">Privacy Policy</span>
                      </label>
                    </div>
                    {errors.agree && (
                      <p className="text-red-500">{errors.agree}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <svg
                        className="fill-white"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:contact@stockalliance.in">contact@stockalliance.in</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
