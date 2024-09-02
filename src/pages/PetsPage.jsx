import React from "react";
import PetCard from "../components/PetCard";
const pets = [
  {
    id: 1,
    name: "Buddy",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    description: "A friendly dog.",
  },
  {
    id: 2,
    name: "Mittens",
    image: "https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg",
    description: "A cute pug.",
  },
  {
    id: 3,
    name: "Fluffy",
    image:
      "https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg-900x510.jpg",
    description: "A fluffy dog.",
  },
  {
    id: 4,
    name: "Coco",
    image:
      "https://img.mstaml.com/i168834561118380078/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%83%D9%84%D8%A8-%D8%A8%D9%85%D8%B8%D9%87%D8%B1-%D9%84%D8%B7%D9%8A%D9%81.jpg",
    description: "Cute looking dog.",
  },
  {
    id: 5,
    name: "Lully",
    image:
      "https://img.mstaml.com/i168834561162600020/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%83%D9%84%D8%A8-%D8%A8%D9%88%D9%85%D8%B1%D9%8A%D9%86%D9%8A%D8%A7%D9%86.jpg",
    description: "A fluffy dog.",
  },
  {
    id: 6,
    name: "Shorthair",
    image:
      "https://img.mstaml.com/i168834561354860085/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%83%D9%84%D8%A8-%D8%B4%D9%8A%D9%88%D8%A7%D9%88%D8%A7.jpg",
    description: "Chihuahua dog.",
  },
  {
    id: 7,
    name: "Porm",
    image:
      "https://img.mstaml.com/i168834561273630068/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%83%D9%84%D8%A8-%D8%A8%D9%88%D9%85%D8%B1%D9%8A%D9%86%D9%8A%D8%A7%D9%86.jpg",
    description: "Pomeranian dog.",
  },
  {
    id: 8,
    name: "Eso",
    image:
      "https://img.mstaml.com/i168834560833710015/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%83%D9%84%D8%A8-%D9%85%D8%A7%D9%84%D8%B7%D9%8A.jpg",
    description: "Maltese dog.",
  }, 
  {   id: 9,
  name: "Wello",
  image:
    "https://img.mstaml.com/i168834560959530095/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%83%D9%84%D8%A8-%D8%A8%D9%88%D8%B3%D8%B7%D9%86.jpg",
  description: "Boston dog.",
},
];

const PetsPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <h2 className="text-3xl font-bold text-neutral mb-4">Available Pets </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <PetCard key={pet.id} prop={pet} />
        ))}
      </div>
    </div>
  );
};
export default PetsPage;
