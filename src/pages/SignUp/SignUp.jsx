import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { user } = useContext(AuthContext);

    const handlerSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const select = form.select.value;
        const password = form.password.value;
        
        console.log(name,email,select,password)
    }

  return (
    <div >
        <h2 className="text-4xl font-bold text-primary text-center lg:m-16">|| Sign Up Here ||</h2>
        <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-32">
          <img src={loginImg} className="hidden lg:block" alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-white">
          <form onSubmit={handlerSubmit} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Select</span>
              </label>
              <select name="select" className="select input-bordered">
                <option>User</option>
                <option>Seller</option>
              </select>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="******"
                className="input input-bordered"
              />
            </div>

            <input
              className="btn btn-accent w-full"
              value="Login"
              type="submit"
            />
            <p className="text-sm text-center mt-3">
            Already Have Account{" "}
            <Link className="text-secondary" to="/login">
             Please Login !
            </Link>
          </p>

            <div className="divider">OR</div>

            <button className="btn btn-outline w-full">
              CONTINUE WITH GOOGLE
            </button>
            
          </form>

        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
