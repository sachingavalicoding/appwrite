
const Signin = () => {
  return (
    <section className="w-full min-h-screen py-16  ">
        <form action="./backend.php"className="max-w-[26rem] px-4 py-8 flex flex-col gap-4  mx-auto border-2 flex flex-col rounded-md  ">
        <h2 className="text-white text-4xl text-center my-2"> SIGN IN </h2>
         
           <div className="row  flex flex-col gap-2 ">
             <label className="text-white bg-transparent" htmlFor="email">Email </label>
             <input className=" rounded-md px-4 py-2  w-full bg-transparent border-[1px] outline-none  text-white border-slate-300 " type="email" name="name" placeholder="Enter Your Email " />
           </div>

           <div className="row  flex flex-col gap-2 ">
             <label className="text-white bg-transparent" htmlFor="password">Password </label>
             <input className=" rounded-md px-4 py-2  w-full bg-transparent border-[1px] outline-none  text-white border-slate-300 " type="password" name="name" placeholder="Enter Your Password " />
           </div>
          
           <div className="row flex flex-col gap-2 mt-4 ">
            <button className="px-4 py-2 border-2 text-white bg-transparent rounded-lg">Sign Up </button>
           </div>
        </form>
      </section>
  )
}

export default Signin