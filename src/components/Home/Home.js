import React, { useEffect, useState } from "react";
import headerImage from "../../images/18177541-car-img-01_1000000000000000000028.png";
import Services from "../Services/Services";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <>
      <main
        style={{ background: "#FFEEE0" }}
        className="flex justify-between items-center min-h-screen w-screen flex-col-reverse lg:flex-row lg:justify-around"
      >
        <div
          className={`${
            isAnimated ? "scale-y-100" : "scale-y-0"
          } mt-10 text-center lg:text-left transform transition duration-1000 ease-in-out`}
        >
          <h2
            style={{ color: "#00305A" }}
            className="text-6xl my-8 font-bold lg:text-6xl"
          >
            Save Up To <span style={{ color: "#EC6608" }}>30%</span> on <br />{" "}
            Your Car Insursnce <br /> In Minutes
          </h2>
          <span
            style={{ background: "#EC6608", color: "#00305A" }}
            className="inline-block bg-yellow-600 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide font-bold"
          >
            Explore
          </span>
        </div>
        <div>
          <img
            className={`${
              isAnimated ? "scale-150" : "translate-x-full translate-y-full"
            }w-screen lg:max-w-xl transform transition duration-1000 ease-in-out`}
            src={headerImage}
            alt=""
          />
        </div>
      </main>
      <Services />
    </>
  );
};

export default Home;
