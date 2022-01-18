import React, { useState } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "./cool-gallery.css";
function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Gallery">
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;
