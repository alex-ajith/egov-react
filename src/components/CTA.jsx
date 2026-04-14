import React from "react";
import digitLogo from "../assets/digit-n.png";

function CTA() {
  return (
    <section className="cta text-center">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* Left */}
          <div className="col-lg-6 text-start">
            <img src={digitLogo} alt="Logo" height="60" />

            <h2>
              Open source <strong>technology-for-good</strong> platform
            </h2>

            <p className="mt-3">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion
              and Transformation is eGov's open-source platform with reusable
              building blocks and shared data registries that can be used to
              build solutions in multiple sectors.
            </p>

            <button className="btn btn-light rounded-pill px-4 mt-3">
              Explore Platform
            </button>
          </div>

          {/* Right */}
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

export default CTA;