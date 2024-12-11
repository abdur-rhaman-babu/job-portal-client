import Lottie from "lottie-react";
import registerAnimation from "../../assets/lotte/Animation - 1733839892103.json";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const {
    createUser,
    updateUserProfile,
    setUser,
    error,
    setError,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    setLoading(true);
    const upperCase = /[A-Z]/;
    if (!upperCase.test(password)) {
      setError("Password must be at least one uppercase letter");
      setLoading(false);
      return;
    }

    const lowerCase = /[a-z]/;
    if (!lowerCase.test(password)) {
      setError("Password must be at least one lowercase letter");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 character");
      setLoading(false);
      return;
    }

    const profile = {
      displayName: name,
      photoURL: photo,
    };
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        updateUserProfile(profile);
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center mt-5">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
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
            <p className="text-red-600">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  " Register"
                )}
              </button>
            </div>
          <div>
              <p>Already have an account? <Link className="text-red-600" to='/signIn'>Sign In</Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
