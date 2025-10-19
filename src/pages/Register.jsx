import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl pt-10">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Register Now!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
            />
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
            <button className="btn bg-green-500 text-white mt-4">
              Register
            </button>
            <div>
              Already have an account?
              <Link to="/login" className="text-blue-400 underline">
                {" "}
                Login
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
