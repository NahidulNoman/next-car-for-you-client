import React from "react";
import { useRouteError } from "react-router-dom";
import errorImg from '../../assets/error.png';
import NavBar from "../Share/NavBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
    <div className="flex justify-center items-center text-center mt-8">
      <div>
        <h1 className="text-5xl">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p>{error.statusText || error.message}</p>
            <p className="text-red-500">{error.status}</p>
          </div>
        )}
        <img  src={errorImg} alt="" />
      </div>
    </div>
    </>
  );
};

export default ErrorPage;