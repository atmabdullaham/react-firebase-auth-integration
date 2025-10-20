import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (user) {
    return children;
  }

  // ✅ 'replace' prevents back navigation to protected route
  return <Navigate state={location?.pathname} to="/login" replace />;
};

export default PrivateRoutes;
