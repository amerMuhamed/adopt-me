import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-neutral p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-white text-2xl font-bold">
          Pets Shelter
        </Link>
        <div className="space-x-4">
          <Link to={"/pets"} className="text-white hover:text-secondary">
            Pets
          </Link>
          <Link to={"/adopt"} className="text-white hover:text-secondary">
            Adopt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
