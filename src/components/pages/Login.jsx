import React, { use, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const {logInUser,forgetUserPassword,google,setGoogle,github,setGithub} = use(AuthContext)
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const location = useLocation();
    // console.log("From login: ",location)

    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        // const email = form.email.value;
        const password = form.password.value;
        logInUser(email,password)
        .then(result => {
            // console(result.user)
            // alert("Log In Successfully")
            // toast.success('Log In Successfully')
            if(github == true || google == true){setGithub(false),setGoogle(false)}
            toast.success("Login successfully!");
            // navigate(`${location.state ? location.state : '/'}`)
            setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 1500);
        })
        .catch(error => {
            // alert(error.message)
            const errorMessage = error.code;
            setError(errorMessage)
        })
    }

    const handleResetPassword = () => {
      // const form = event.target;
      // const email = form.email.value;
      if(!email){
        alert('enter your email first')
      }

      forgetUserPassword(email)
      .then(result => {
        // console.log(result.user)
      })
      .catch(error => {
            // alert(error.message)
            const errorMessage = error.code;
            setError(errorMessage)
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
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label className="label text-sm">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
                required
              />
              <div onClick={handleResetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {
                error ? <p className="text-error font-semibold">{error}</p> : ""
              }
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
      {/* <ToastContainer position="top-center" autoClose={1000} theme="colored"/> */}
    </div>
  );
};

export default Login;
