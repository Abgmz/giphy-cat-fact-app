import svgImage from "../assets/circles.svg";

export const Loader = () => {
  return (
    <div>
      <img className="loader" src={svgImage} alt="loader-circles" />
    </div>
  );
};
