import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/myApplication">My Application</NavLink>
      </li>
      <li>
        <NavLink to="/addJob">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/myPostedJob">My Posted Job</NavLink>
      </li>
      {user ? (
        <div>
          <button onClick={handleSignOut} className="border-2 p-2 rounded-lg">
            Sing Out
          </button>
        </div>
      ) : (
        <>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/signIn">Sign In</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Job Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <img className="rounded-full w-10 h-10 md:w-12 md:h-12 mr-5" src={user?.photoURL} alt="" /> : ''
        }
        <a className="btn">Dark</a>
      </div>
    </div>
  );
};

export default Navbar;