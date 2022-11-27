import React, { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import loginImg from "../../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser,userUpdateInfo,signInGoogle } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState('');

  const [token] = useToken(createdUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  if(token) {
    navigate(from , {replace : true});
  };

    const handlerSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const select = form.select.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
          updateUserName(name,select,email);
        })
        .catch(error => {
          console.log(error)
        })
        // console.log(name,email,select,password)
    };
    
    // update user name
    const updateUserName = (name,select,email) => {
      const profile = {
        displayName : name,
      }
      userUpdateInfo(profile)
      .then(() => {
        getUserRole(name,select,email);
      })
      .catch(error => console.log(error))
    };

    // sign up role form 
    const getUserRole = (name,select,email) => {
      const users = {
        name : name,
        role : select,
        email : email
      };
      fetch('http://localhost:5000/users', {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(users)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success('successfully singup !!')
          setCreatedUserEmail(email);
        };
      })
    };

     // get access token
    // const getUserToken = email => {
    //   fetch(`http://localhost:5000/jwt?email=${email}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     if(data.accessToken){
    //       localStorage.setItem('token', data.accessToken);
    //       navigate(from , {replace : true});
    //     }
    //   })
    // };

   
     // sign in with google
     const handlerGoogle = () => {
      signInGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
        getGoogleUserRole();
      })
      .catch(error => {
        console.log(error);
      })
    };

    // get google user role
    const getGoogleUserRole = () => {
      const users = {
        role : 'Buyer',
        userStatus : true,
      };
      fetch('http://localhost:5000/users', {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(users)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          console.log(data);
          navigate(from , {replace : true});
        };
      })
    };

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
                required
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
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Select</span>
              </label>
              <select name="select" className="select input-bordered">
                <option>Buyer</option>
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
              value="Sign Up"
              type="submit"
            />
            <p className="text-sm text-center mt-3">
            Already Have Account{" "}
            <Link className="text-secondary" to="/login">
             Please Login !
            </Link>
          </p>

            <div className="divider">OR</div>

            <button onClick={handlerGoogle} className="btn btn-outline w-full">
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
