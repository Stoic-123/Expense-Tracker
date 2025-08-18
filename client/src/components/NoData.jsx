import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const NoData = () => {
  return (
    <div className="container w-100">
      <div className=" d-flex flex-column align-items-center ">
        <img
          style={{
            width: "230px",
            height: "230px",
          }}
          src="/assets/NoData.png"
          alt=""
        />
        <div className="text-center">
          <h2 className="mb-0 text-primary fw-bold">No results found</h2>
          <p className="text-secondary">No data available. Try adding some items.</p>
        </div>
      </div>
    </div>
  );
};

export default NoData;
