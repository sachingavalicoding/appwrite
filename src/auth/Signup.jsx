import { useState } from "react";

const Signup = () => {
 const [formData , setFormData] = useState({
    name:"",
    email:"",
    phoneno:"",
    password:"",
    conPassword:"",
 })
  const inputOnChange = (e) => {
    const { name , value } = e.target;
    setFormData({
        ...formData ,
        [name] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="w-full min-h-screen py-16">
        <form
          onSubmit={handleSubmit}
          className="max-w-[26rem] px-4 py-8 gap-4 mx-auto border-2 flex flex-col rounded-md"
        >
          <h2 className="text-white text-4xl text-center my-2"> SIGN UP </h2>
          <div className="row flex flex-col gap-2">
            <label className="text-white bg-transparent" htmlFor="name">
              Name{" "}
            </label>
            <input
              className="rounded-md px-4 py-2 w-full bg-transparent border-[1px] outline-none text-white border-slate-300"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={inputOnChange}
              required
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label className="text-white bg-transparent" htmlFor="email">
              Email{" "}
            </label>
            <input
              className="rounded-md px-4 py-2 w-full bg-transparent border-[1px] outline-none text-white border-slate-300"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={inputOnChange}
              required
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label className="text-white bg-transparent" htmlFor="phoneno">
              Phone No{" "}
            </label>
            <input
              className="rounded-md px-4 py-2 w-full bg-transparent border-[1px] outline-none text-white border-slate-300"
              type="tel"
              name="phoneno"
              placeholder="Enter Your Phone no"
              value={formData.phoneno}
              onChange={inputOnChange}
              required
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label className="text-white bg-transparent" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="rounded-md px-4 py-2 w-full bg-transparent border-[1px] outline-none text-white border-slate-300"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={inputOnChange}
              required
            />
          </div>
          <div className="row flex flex-col gap-2">
            <label className="text-white bg-transparent" htmlFor="conPassword">
              Confirm Password{" "}
            </label>
            <input
              className="rounded-md px-4 py-2 w-full bg-transparent border-[1px] outline-none text-white border-slate-300"
              type="password"
              name="conPassword"
              placeholder="Confirm Password"
              value={formData.conPassword}
              onChange={inputOnChange}
              required
            />
          </div>
          <div className="row flex flex-col gap-2 mt-4">
            <button
              type="submit"
              className="px-4 py-2 border-2 text-white bg-transparent rounded-lg"
            >
              Sign Up{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
