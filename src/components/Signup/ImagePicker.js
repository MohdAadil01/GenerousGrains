"use client";

import { useState } from "react";
import Image from "next/image";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <>
      <div className="mb-1">
        <label className="block text-gray-700 mb-1" htmlFor="profileImage">
          Profile Image
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          id="profileImage"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {pickedImage ? (
        <div className="mb-4 relative w-full h-64">
          <Image
            src={pickedImage}
            fill
            alt="Profile picture"
            className="w-full h-auto rounded-md"
          />
        </div>
      ) : (
        <div className="mb-4 text-gray-500">No Image Selected...</div>
      )}
    </>
  );
};
export default ImagePicker;
