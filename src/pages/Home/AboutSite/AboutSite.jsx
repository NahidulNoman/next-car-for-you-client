import React from "react";
import about from "../../../assets/about.jpeg";

const AboutSite = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold mt-20">
        About Our Site
      </h2>
      <div className="hero bg-white mt-16 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="sm-w-1/2 lg:w-1/2">
            <img
              src={about}
              className=" rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="sm-w-1/2 lg:w-1/2">
            <h1 className="text-2xl font-bold">
              We offer high quality vehicles at unbelievable prices & creates
              pleasant buying experience.
            </h1>
            <p className="py-6">
              AutoImage is nisi aliquip consequat duis velit esse cillum dolore
              fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor
              sit amt consectetur adipisicing elit sed eiusmod tempor
              incididuntu labore et dolore magna aliqua enimad minim veniam quis
              nostrud area exercitation ullamco laboris nisi aliquip. Freebet
              Slot Duis aute irure dolor in reprehenderitn voluptate velit ese
              cillum dolore fugiat free chip nulla pariatur excepteur sint
              occaecat cupidatat non proident. Duis aute irure dolor in
              reprehenderitn voluptate velit ese cillum dolore fugiat nulla
              pariatur excepteur sint occaecat cupidatat non proident.
            </p>
            <button className="btn btn-primary">Read more </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;
