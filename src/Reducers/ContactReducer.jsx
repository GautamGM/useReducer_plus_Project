import React, { useState } from 'react';

function ImageGalleryUploader() {
  // State to store uploaded images in an array
  const [dtaa, setDtaa] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      // Create a URL for the uploaded file
      const imageURL = URL.createObjectURL(file);

      // Add the new image URL to the `dtaa` array
      setDtaa((prevDtaa) => [...prevDtaa, imageURL]);
    }
  };

  // Cleanup URLs when component unmounts
  React.useEffect(() => {
    return () => {
      dtaa.forEach((imageURL) => URL.revokeObjectURL(imageURL));
    };
  }, [dtaa]);

  return (
    <div>
      <h2>Upload Images to Gallery</h2>
      <input type="file" accept="image/*" onChange={handleFileUpload} />

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {dtaa.map((imageURL, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={imageURL} alt={`Uploaded preview ${index}`} style={{ width: '150px', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGalleryUploader;
