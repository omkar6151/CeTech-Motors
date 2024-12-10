import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isSubtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleRect = titleRef.current.getBoundingClientRect();
      const subtitleRect = subtitleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (titleRect.top < windowHeight && titleRect.bottom > 0) {
        setTitleVisible(true);
      } else {
        setTitleVisible(false);
      }

      if (subtitleRect.top < windowHeight && subtitleRect.bottom > 0) {
        setSubtitleVisible(true);
      } else {
        setSubtitleVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-14 bg-blue-50">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Section Heading */}
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-6 opacity-80 ${
            isTitleVisible ? 'animate__slideInUp' : ''
          }`}
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }} // Adjust font size with CSS clamp() for mobile view
        >
          About Us
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className={`text-5xl text-center mb-12 opacity-75 ${
            isSubtitleVisible ? 'animate__slideInUp' : ''
          }`}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }} // Adjust font size with CSS clamp() for mobile view
        >
          Welcome to the future. <br/>
          Human-centric, smart and green.
        </p>

        {/* Card */}
        <div className="flex justify-center relative">
          <div className="bg-white shadow-xl rounded-[25px] overflow-hidden w-full lg:w-[1080px] max-h-[300px] relative">
            {/* Grayish Layer */}
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

            {/* Image */}
            <img
              src="../assets/aboutus_02.jpg"
              alt="About Us"
              className="w-full h-auto"
            />

            {/* Paragraph */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-md text-white opacity-90 p-8 lg:flex-row lg:items-start lg:text-left lg:p-12">
              <p className="max-w-[90%] text-sm md:text-md lg:text-lg xl:text-xl lg:overflow-auto">
                At Cetech Motors, we explore new possibilities and push boundaries. Our
                human-centric, hi-tech approach is evident in our extensive range of
                integrated and smart e-mobility solutions. <br /> We choose to stay ahead
                of the curve. With 'responsibility' being one of our core values, we are
                committed to making responsible choices, creating a positive legacy and
                connecting aspirations. <br /> We are spearheading the transition to
                sustainable, connected and safer mobility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
