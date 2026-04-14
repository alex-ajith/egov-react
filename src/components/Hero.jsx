import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h1>
              20 years of digital transformation in public service delivery
              <br />
              <span>It's possible.</span>
            </h1>

            <p className="mt-3">
              Driving open digital infrastructure to enable transparent and
              efficient governance.
            </p>

            <div className="mt-4">
              <button className="btn btn-primary rounded-pill me-2">
                Our Approach
              </button>
              <button className="btn btn-outline-primary rounded-pill">
                Our Impact
              </button>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="https://placehold.co/500x500"
              className="img-fluid"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
