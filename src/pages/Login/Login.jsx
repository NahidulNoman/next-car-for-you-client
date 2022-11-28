import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
  const { logUser, signInGoogle } = useContext(AuthContext);
  const [logInEmail, setLogInEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const [token] = useToken(logInEmail);

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handlerLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLogInEmail(email);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(email, password);
  };

  // sign in with google
  const handlerGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        getGoogleUserRole();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get google user role
  const getGoogleUserRole = () => {
    const users = {
      role: "Buyer",
      userStatus : true,
    };
    fetch("https://hit-the-road-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          navigate(from , {replace : true});
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary text-center mt-8 lg:m-16">
        || Log In Here ||
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:ml-32">
            <img src={loginImg} className="hidden lg:block" alt="" />
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-white">
            <form onSubmit={handlerLogin} className="card-body">
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
                New This Site{" "}
                <Link className="text-secondary" to="/signup">
                  Create an account !
                </Link>
              </p>

              <div className="divider">OR</div>

              <button
                onClick={handlerGoogle}
                className="btn btn-outline w-full"
              >
                CONTINUE WITH GOOGLE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
