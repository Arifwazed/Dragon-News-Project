import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
    const {logInUser} = use(AuthContext)
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email,password)
        .then(result => {
            console(result.user)
            alert("Log In Successfully")
        })
        .catch(error => {
            alert(error.message)
        })
    }
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center py-5">
          Login your account
        </h1>
        <div className="card-body ">
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset ">
              <label className="label text-sm">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
              />
              <label className="label text-sm">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-center my-3 text-sm font-semibold">
                Dont’t Have An Account ?{" "}
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
