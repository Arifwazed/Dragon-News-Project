import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';

const Register = () => {
    const {createUser,setUsers,updateUser} = use(AuthContext)
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name,photo,email,password})
        createUser(email,password)
        .then((result) => {
            // console.log(result.user)
            updateUser({
                displayName: name,photoURL: photo
            }).then(()=> {
                setUsers({...result.user,displayName: name,photoURL: photo})
            })
            .catch(()=>{
                setUsers(result.user)
            })
            navigate('/')
        }

        )
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
      <div>
        <div className="flex justify-center items-center">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <h1 className="text-2xl font-semibold text-center py-5">
              Register your account
            </h1>
            <div className="card-body ">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset ">
                  {/* Name */}
                  <label className="label text-sm">Your Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                  {/* Photo */}
                  <label className="label text-sm">Photo URL</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter Photo URL"
                    name="photo"
                    required
                  />
                  {/* email */}
                  <label className="label text-sm">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Enter your Email Address"
                    name="email"
                    required
                  />
                  {/* Password */}
                  <label className="label text-sm">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Enter your Password"
                    name='password'
                    required
                  />
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                  <p className="text-center my-3 text-sm font-semibold">
                    Dont’t Have An Account ?{" "}
                    <Link to="/auth/login" className="text-secondary">
                      Login
                    </Link>{" "}
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;