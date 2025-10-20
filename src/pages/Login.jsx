import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl pt-10">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-green-500 text-white mt-4">Login</button>
          </fieldset>
        </form>
        <div>
          New to this website?
          <Link to="/register" className="text-blue-400 underline">
            {" "}
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
