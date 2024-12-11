import Lottie from "lottie-react";
import signInAnimation from "../../assets/lotte/Animation - 1733839892103.json";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user)
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const handleSignInWithGoogle = () =>{
    signInWithGoogle()
    .then(result=>{
      console.log(result.user)
      setUser(result.user)
    })
    .catch(err=>{
      console.log('ERROR', err)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={signInAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-5">Sign In!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          <div onClick={handleSignInWithGoogle} className="border flex items-center gap-2 justify-center cursor-pointer p-2 rounded-lg">
           <i> <FcGoogle size={25} /></i>
            <span className="font-bold">Sign with google</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
