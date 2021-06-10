import React from "react";

const ServiceInfo = ({ service }) => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
          <img
            src={service.img}
            alt=""
            className="h-full rounded mb-20 shadow "
          />
          <div>
            <h3 style={{color: "#00305A"}} className="text-3xl mb-2">{service.name}</h3>
            <p style={{color: '#EC6608'}} className="mb-2 text-2xl mt-5">{service.price}</p>
            <button
              className=" inline-block bg-yellow-600 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide font-bold mt-5"
              style={{ background: "#EC6608", color: "#00305A" }}
            >
              Rent It
            </button>
          </div>
        </div>
    </div>
  );
};

export default ServiceInfo;
