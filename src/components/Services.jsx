import React, { useState } from "react";
import servicesData from "../data/servicesData";

function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(servicesData.map(p => p.category))];

  const filteredServices = servicesData.filter((item) => {
    return (
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="services p-4">
      <div className="container">

        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-6 d-flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn rounded-pill ${
                  category === cat ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {filteredServices.length > 0 ? (
            filteredServices.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                <div className="services-card">
                  <img src={item.image} alt={item.name} />
                  <h5>{item.name}</h5>
                  <h6>{item.price}</h6>

                  <button className="btn btn-primary btn-sm rounded-pill mt-2">
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No services found</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default Services;