import React from "react";

const Blog = () => {
  return (
    <div className="mx-5">
      <h2 className="text-center m-11 text-primary text-3xl font-bold">
        Find Your Favorite Blog
      </h2>
      <div className="bg-white rounded-md p-4 shadow-lg mb-4">
        <h3 className="text-xl font-bold">What are the different ways to manage a state in a React application?</h3>
        <h5 className="font-semibold">1. Local state</h5>
        <p className="font-semibold opacity-75">
        Local state is data we manage in one or another component.
        Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs
        </p>
        <h5 className="font-semibold">2. Global state</h5>
        <p className="font-semibold opacity-75">
        Global state is data we manage across multiple components.
        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.
        </p>
        <h5 className="font-semibold">3. Server state</h5>
        <p className="font-semibold opacity-75">
        Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.
        </p>
        <h5 className="font-semibold">4. URL state</h5>
        <p className="font-semibold opacity-75">
        Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
        </p>
      </div>
      <div className="bg-white rounded-md p-4 shadow-lg mb-4">
        <h2 className="text-xl font-bold">How does prototypical inheritance work?</h2>
        <p className="font-semibold opacity-75">
        Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
        </p>
      </div>
      <div className="bg-white rounded-md p-4 shadow-lg mb-4">
        <h5 className="text-xl font-bold"> What is a unit test?</h5>
        <p className="font-semibold opacity-75">
        Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.
        </p>
        <h5 className="font-bold">Why should we write unit tests?</h5>
        <p className="font-semibold opacity-75">
        The main objective of unit testing is to isolate written code to test and determine if it works as intended.
        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
        </p>
      </div>
      <div className="bg-white rounded-md p-4 shadow-lg mb-4">
        <h5 className="text-xl font-bold">React vs. Angular vs. Vue?</h5>
        <h3 className="font-semibold">React.js</h3>
        <p className="font-semibold opacity-75">
        React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
        </p>
        <h3 className="font-semibold">Angular.js</h3>
        <p className="font-semibold opacity-75">
        Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
        </p>
        <h3 className="font-semibold">Vue.js</h3>
        <p className="font-semibold opacity-75">
        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
        </p>
      </div>
    </div>
  );
};

export default Blog;
