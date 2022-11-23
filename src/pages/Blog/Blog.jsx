import React from "react";

const Blog = () => {
  return (
    <div className="mx-5">
      <h2 className="text-center m-7">
        Find Your Favorite Blog
      </h2>
      <div className="bg-light p-4 shadow-lg mb-4">
        <h3>What are the different ways to manage a state in a React application?</h3>
        <h5>1. Local state</h5>
        <p>
        Local state is data we manage in one or another component.
        Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs
        </p>
        <h5>2. Global state</h5>
        <p>
        Global state is data we manage across multiple components.
        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.
        </p>
        <h5>3. Server state</h5>
        <p>
        Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.
        </p>
        <h5>4. URL state</h5>
        <p>
        Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
        </p>
      </div>
    </div>
  );
};

export default Blog;
