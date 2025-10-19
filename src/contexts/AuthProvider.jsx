import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    user: "alobaro",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
