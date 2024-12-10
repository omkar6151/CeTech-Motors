import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-10 bg-gray-700">
      <div className="container mx-auto px-4 lg:px-[8rem] mb-14 mt-10 ">
        {/* Section Heading */}
        <h2 className="text-6xl font-bold text-center mb-8 opacity-80 text-white sm:text-4xl md:text-6xl" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>Our Clients</h2> {/* Adjusted text size for mobile view */}

        {/* Slider */}
        <div className="slick-container">
          <Slider {...settings}>
            {/* Add your client images as individual slides */}
            <div className="slick-slide">
              <img src="../assets/escorts.avif" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/harley.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/kirloskar.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/Hyundai-logo.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/Hero-logo1.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/Suzuki-logo.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/suzuki.png" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/tata.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>

            <div className="slick-slide">
              <img src="../assets/yamaha.jpg" alt="Client Logo" className="mx-auto h-[200px] object-contain" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Clients;
