import React from "react";
import mirage from "../../images/mirage.jpg";
import ford from "../../images/ford.jpg";
import subaru from "../../images/subaru.jpg";
import ServiceInfo from "./ServiceInfo";

const ServicesData = [
  {
    img: mirage,
    name: "Mirage Range",
    price: "$150/Per day",
  },
  {
    img: ford,
    name: "Forester Subaru",
    price: "$250/Per day",
  },
  {
    img: subaru,
    name: "Subaru Libarty",
    price: "$100/Per day",
  },
];

const Services = () => {
  return (
    <div>
      <div style={{color: "#00305A" }} className="text-6xl flex justify-center items-center mt-10 font-bold">
        <h2>Our Rental Fleets</h2>
      </div>
      <div style={{color: "#00305A" }}>
        <p className="text-2xl flex justify-center items-center mt-5">
          Luxury AutoStar Rental Services
        </p>
        <p className=" flex justify-center items-center mt-5 md:text-center">
          Amco laboris nisi ut aliquip xea comod consequt duis aute irure dolor{" "}
          <br /> reprehenderit voluptate velit cillum dolore fugiat <br /> lore
          ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        </p>
      </div>
      {ServicesData.map((service) => (
        <ServiceInfo service={service}></ServiceInfo>
      ))}
    </div>
  );
};

export default Services;
