import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl pt-10">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Register Now!</h1>
        <form>
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
