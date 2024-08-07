import React from "react";
import { data } from "../restApi.json";
const Dealers = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
        <h1 className="heading">WE ARE DEALER OF</h1>
<p>
  We specialize in high-quality electrical panel accessories. we ensure you receive the best products and exceptional service for all your project needs.
</p>

        </div>
        <div className="dealers_container">
          {data[0].dealers.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dealers;
