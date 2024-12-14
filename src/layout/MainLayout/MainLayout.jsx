import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24">
        {navigation.state === "loading" ? (
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
