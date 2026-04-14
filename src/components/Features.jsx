import React, { useState } from "react";
import featuresData from "../data/featuresData";

function Features() {
  const [active, setActive] = useState("Public Health");

  const buttons = Object.keys(featuresData);
  const cards = featuresData[active];

  return (
    <section className="features">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-4">
            <h2>
              Big problems need <strong>bold approaches</strong>
            </h2>

            <div className="d-flex flex-column gap-2 mt-3">
              {buttons.map((btn) => (
                <button
                  key={btn}
                  className={`btn rounded-pill ${
                    active === btn ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setActive(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="row g-4">
              {cards.map((card, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <div className="feature-card text-center p-4">
                    <img
                      src="https://placehold.co/50x50"
                      alt=""
                      className="mb-3"
                    />
                    <h2>{card.value}</h2>
                    <p>{card.description}</p>

                    <button className="btn btn-primary btn-sm rounded-pill">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
