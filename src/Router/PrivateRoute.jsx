/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)

  if (loading) {
    return <span className="loading loading-spinner loading-md"></span>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/signIn" state={location?.pathname}></Navigate>
    </div>
  );
};

export default PrivateRoute;
