import { useNavigate } from "react-router";
import { assets } from "../assets/assets";
import {
  ArrowRight,
  CalculatorIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    // change background dynamically with new releases
    <div className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url('/backgroundImage.png')] bg-cover bg-center h-screen">
      <img
        className="max-h-11 lg:h-11 mt-20"
        src={assets.marvelLogo}
        alt="background logo"
      />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Guardians <br /> of the Galazy
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2018
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quo
        quis optio placeat debitis error praesentium in perferendis odio harum
        nam assumenda possimus ipsam eaque. Exercitationem incidunt officiis
        vitae commodi.
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies <ArrowRight className="w-5 h-5" />{" "}
      </button>
    </div>
  );
};

export default HeroSection;
