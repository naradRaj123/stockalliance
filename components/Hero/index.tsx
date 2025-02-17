"use client";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    occupation: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.number) errors.number = "Number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.occupation) errors.occupation = "Occupation is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-16 pt-12 md:pt-40 xl:pb-20 xl:pt-46">
        <div className="mx-auto animate-fadeIn max-w-screen-xl px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
                Stock Alliance
              </h4>
              <h1 className="mb-5 text-2xl md:text-3xl font-bold text-black dark:text-white xl:text-hero">
                Unlock Market Potential with Stock Alliance{" "}
                <span className="relative inline-block">
                  <span className="before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark"></span>
                </span>
              </h1>
              <p className="text-base md:text-lg">
                In the dynamic world of investments, we merge cutting-edge analysis with expert strategy to guide you through the stock market. ✨ Our committed team turns your investment dreams into reality, providing bespoke strategies backed by in-depth research and market insights. Let’s chart your course to financial success together!
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 w-full max-w-md">
                <h2 className="text-xl font-semibold text-center mb-5 text-black dark:text-white">
                  Fill this form to contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="rounded-lg border border-stroke px-4 py-2 w-full shadow-Stock Alliance-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="rounded-lg border border-stroke px-4 py-2 w-full shadow-Stock Alliance-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="rounded-lg border border-stroke px-4 py-2 w-full shadow-Stock Alliance-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="rounded-lg border border-stroke px-4 py-2 w-full shadow-Stock Alliance-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Enter your occupation"
                      className="rounded-lg border border-stroke px-4 py-2 w-full shadow-Stock Alliance-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-lg bg-primary px-7.5 py-2.5 text-white w-full transition-all duration-300 ease-in-out hover:bg-primaryho"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
