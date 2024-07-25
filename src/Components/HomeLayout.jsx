import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 ">
      <Signup />
      <Signin />
    </div>
  );
};

export default HomeLayout;
