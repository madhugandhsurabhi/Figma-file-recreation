import React, { useState } from 'react';

function App() {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('about');

  // State to track gallery images
  const [galleryImages, setGalleryImages] = useState([
    { id: 1, src: 'photo 1.jpg', alt: 'Image 1' },
    { id: 2, src: 'photo 2.jpg', alt: 'Image 2' },
    { id: 3, src: 'photo 3.jpg', alt: 'Image 3' },
  ]);

  // Function to add a new image to the gallery
  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImageId = galleryImages.length + 1;
      const newImage = {
        id: newImageId,
        src: URL.createObjectURL(files[0]), // Create a local URL for the uploaded file
        alt: `Image ${newImageId}`,
      };
      setGalleryImages([...galleryImages, newImage]);
    }
  };



  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <p className="text-gray-400">
            Hello! I’m Dave, your sales rep from Salesforce. I’ve been working at this awesome company for 3 years now.<br />
            
             I was born and raised in Albany,NY and have been living in Santa for the past 10 years my wife Tiffany and my 4 year old twin daughters Emma and Elia. Both of them are just just starting school, so my calendar is usually blocked between 9-10 am.
          </p>
        );
      case 'experiences':
        return (
          <p className="text-gray-400">
            My experiences include 10+ years in sales and project management, handling large accounts and leading teams to success...
          </p>
        );
      case 'recommended':
        return (
          <p className="text-gray-400">
            I highly recommend Emma from the marketing department. She is an exceptional team player and has consistently delivered high-quality work...
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side */}
      <div className="w-1/2"></div>

      {/* Right Side */}
      <div className="w-1/2 p-8 space-y-12">
        {/* About Me Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between border-b border-gray-700 pb-4">
            {/* Tab Buttons */}
            <button
              className={`text-white ${activeTab === 'about' ? 'border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
            <button
              className={`text-white ${activeTab === 'experiences' ? 'border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
            </button>
            <button
              className={`text-white ${activeTab === 'recommended' ? 'border-b-2 border-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>
          <div className="mt-4">
            {/* Render the content based on active tab */}
            {renderContent()}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-white">Gallery</h2>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg" onClick={handleImageUpload}>
              + Add Image
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-gray-600 h-24 flex justify-center items-center">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;





