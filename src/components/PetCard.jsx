import React from "react";
import { Link } from "react-router-dom";
const PetCard = ({ prop }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-2">
      <img
        src={prop.image}
        alt={prop.name}
        className="rounded-md w-full h-80 object-cover mb-4"
      />
      <h4 className="text-xl font-bold text-neutral">{prop.name}</h4>
      <p className="text-md text-neutral mt-2">{prop.description}</p>
      <Link to={`/pets/${prop.id}`}>
        <button className="text-white bg-primary rounded-md px-4 py-2 mt-4 hover:bg-secondary">
          Adopt Me
        </button>
      </Link>
    </div>
  );
};

export default PetCard;
