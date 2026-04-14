import React from "react";

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-start gap-3">
              <div className="stat">1B+</div>
              <p className="mb-0">
                Citizens availing public services through eGov's Digital Public
                Goods (DPG)
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center text-md-start">
          <div className="col-12 col-md-6 mb-4">
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-3">
              <div className="stat">50+</div>
              <p className="mb-0">Partners</p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-end gap-2 gap-md-3">
              <div className="stat">20+</div>
              <p className="mb-0">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
