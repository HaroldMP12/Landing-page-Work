import React, { useState } from "react";

interface Props {
  images: string[];
}

const Carrusel: React.FC<Props> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="carousel mr-34">
      <img className="w-full h-80 object-contain" src={images[currentImage]} alt="" />
      <div className="carousel-controls flex justify-center mt-2">
        <button className="m-2 p-2 bg-white rounded-md text-black border border-black hover:bg-indigo-600" onClick={handlePrevClick}>Previous</button>
        <button className="p-3 m-2 bg-white rounded-md text-black border border-black hover:bg-indigo-600" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carrusel;