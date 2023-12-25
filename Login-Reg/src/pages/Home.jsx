import React from "react";

function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome To The Home Page</h1>
        <p className="lead">This is a simple and awesome MERN application.</p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <h2>Contact Us</h2>
          <p>
            You can contact us using a dedicated contact page
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h2>Register With Us</h2>
          <p>
            Quickly register to the application using the register page.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h2>Login</h2>
          <p>
            If You're already registered, then you can head over to the login page to LOGIN.
          </p>
        </div>
      </div>

      <div className="jumbotron">
        <h1 className="display-4">Get Started</h1>
        <p className="lead">
          Ready to explore? Click the button below to get started.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/register" role="button">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
