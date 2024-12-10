import React from 'react';

const Products = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-6xl font-bold text-center mb-10 opacity-80 text-black-800" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>Our Products</h2>

        {/* Container 1 */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-[1050px] mx-auto relative mb-8">
          {/* Left Part - Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <img src="../assets/2_cylinder_image.webp" alt="Product" className="w-full h-auto rounded-[30px]" style={{ maxHeight: '300px' }} />
              {/* Blackish Layer */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>
              {/* Button - Hidden by default */}
              <button className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white bg-red-600 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ width: '100px', height: '30px', fontSize: '12px' }}>Know More</button>
            </div>
          </div>

          {/* Right Part - Title and Paragraph */}
          <div className="flex-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">2 CYLINDER Engine</h3>
              <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-lg mb-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-400 my-8 mx-auto w-[1080px]" />

        {/* Container 2 */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-[1050px] mx-auto relative mb-8">
          {/* Left Part - Image */}
          <div className="flex-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">3 CYLINDER Engine</h3>
              <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-lg mb-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <p className="text-lg"></p>
            </div>
          </div>

          {/* Right Part - Title and Paragraph */}
          <div className="flex-1 relative">
            <div className="relative">
              <img src="../assets/3_cylinder_image.jpg" alt="Product" className="w-full h-auto rounded-[30px]" style={{ maxHeight: '300px' }} />
              {/* Blackish Layer */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>
              {/* Button - Hidden by default */}
              <button className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white bg-red-600 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ width: '100px', height: '30px', fontSize: '12px' }}>Know More</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-400 my-8 mx-auto w-[1080px]" />

        {/* Container 3 */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-[1050px] mx-auto relative mb-8">
          {/* Left Part - Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <img src="../assets/4_cylinder_image.jpg" alt="Product" className="w-full h-auto rounded-[30px]" style={{ maxHeight: '300px' }} />
              {/* Blackish Layer */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>
              {/* Button - Hidden by default */}
              <button className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white bg-red-600 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ width: '100px', height: '30px', fontSize: '12px' }}>Know More</button>
            </div>
          </div>

          {/* Right Part - Title and Paragraph */}
          <div className="flex-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">4 CYLINDER Engine</h3>
              <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-lg mb-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-400 my-8 mx-auto w-[1080px]" />

        {/* Container 4 */}
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-[1050px] mx-auto relative mb-8">
          {/* Left Part - Image */}
          <div className="flex-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">6 CYLINDER Engine</h3>
              <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-lg mb-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>

          {/* Right Part - Title and Paragraph */}
          <div className="flex-1 relative">
            <div className="relative">
              <img src="../assets/6_cylinder_image.avif" alt="Product" className="w-full h-auto rounded-[30px]" style={{ maxHeight: '300px' }} />
              {/* Blackish Layer */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>
              {/* Button - Hidden by default */}
              <button className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white bg-red-600 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ width: '100px', height: '30px', fontSize: '12px' }}>Know More</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-400 my-8 mx-auto w-[1080px]" />

       {/* Responsive Styles for Mobile View */}
       <style jsx>{`
            @media (max-width: 768px) {
              .flex-wrap {
                flex-direction: column-reverse;
              }
            }
          `}</style>

      </div>
    </section>
  );
}

export default Products;
