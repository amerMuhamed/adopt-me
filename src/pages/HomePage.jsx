import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Welcome to Pet's Shelter
      </h1>
      <p className="text-lg text-neutral mb-8">Find Your friend today! </p>
      <div className="flex flex-row justify-center gap-4">
        <Link to="/pets">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-secondary">
            View Available Pets
          </button>
        </Link>
        <Link to="/adopt">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-secondary">
            Adopt Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
