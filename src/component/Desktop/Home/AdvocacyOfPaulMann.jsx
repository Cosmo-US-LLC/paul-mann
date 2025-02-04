import React from 'react';

const AdvocacyOfPaulMann = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-20 py-12 bg-gray-100">
      <div className="w-full max-w-4xl overflow-hidden bg-white shadow-lg rounded-2xl">
        <div className="relative flex items-center justify-center h-64 bg-gray-900">
          <video
            className="object-cover w-full h-full"
            src="your-video-url.mp4"
            controls
            alt="Advocated for Water Conservation"
          />
          <div className="absolute px-3 py-1 text-sm font-semibold text-white bg-black bg-opacity-75 rounded-lg top-4 left-4">
            Advocated for Water Conservation on CBS Evening News
          </div>
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">PAUL MANN</h2>
          <p className="mt-1 text-sm text-gray-600">Owner, Water Champions</p>
        </div>
      </div>

      <div className="flex justify-around w-full max-w-4xl mt-12">
        <div className="flex items-center p-4 space-x-2 bg-white shadow-lg rounded-2xl">
          <div className="text-4xl text-blue-700">🔗</div>
          <div>
            <span className="text-xl font-bold text-gray-800">1,000+</span>
            <p className="text-sm text-gray-600">LinkedIn Followers</p>
          </div>
        </div>

        <div className="flex items-center p-4 space-x-2 bg-white shadow-lg rounded-2xl">
          <div className="text-4xl text-gray-700">📺</div>
          <div>
            <p className="text-sm text-gray-600">Featured In:</p>
            <div className="flex mt-1 space-x-2">
              <span className="font-medium text-gray-800">CBS</span>
              <span className="font-medium text-gray-800">Smart Business</span>
            </div>
          </div>
        </div>
      </div>

      <button className="px-8 py-3 mt-8 text-lg font-semibold text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
        PRESS
      </button>
    </section>
  );
};

export default AdvocacyOfPaulMann;
