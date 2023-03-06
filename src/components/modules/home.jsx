import React from "react";

const Home = () => {
  return (
    <>
      <div className="p-5 mb-4 mt-2 bg-info-subtle rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Visit your lists</h1>
          <p className="col-md-8 fs-4">
            Welcome in, if it is a first time visiting your lists page you will
            be promted to LogIn or SignIn, If it is not your first time you will
            know what you will see after this button is clicked. Good luck.
          </p>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/private"
          >
            <button className="btn btn-primary" type="button">
              Lets go IN
            </button>
          </a>
        </div>
      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Public lists</h2>
            <p>
              If you have no desire to give us you information as a trade for
              this magestic service, dont. Here are some free lists to look at.
            </p>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="/public"
            >
              <button className="btn btn-primary" type="button">
                Enter public list
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>You find this useful?</h2>
            <p>Fuse your lists to have a shopping list for whole week.</p>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="/combine"
            >
              <button className="btn btn-primary" type="button">
                API endpoints
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
