"use client"
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import leftArrowImage from '/public/Images/left-arrow.png';
import rightArrowImage from '/public/Images/right-arrow.png';


interface CustomSliderSettings extends SliderSettings {
  afterChange?: (index: number) => void;
}

function Feedback() {
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: CustomSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const handleArrowClick = (direction: 'left' | 'right'): void => {
    setAutoplay(false); // Pause autoplay when arrows are clicked
    if (sliderRef.current) {
      if (direction === 'left') {
        // Move the slider to the previous slide
        sliderRef.current.slickPrev();
      } else {
        // Move the slider to the next slide
        sliderRef.current.slickNext();
      }
    }
  };

  return (
    <div className="h-[500px] w-full text-black flex justify-center items-center flex-col lg:mt-[5%]">
      <div className="h-[20%] flex justify-center text-4xl font-robotoSlab font-bold text-[#224f34] lg:mb-[5%]">Feedback Corner</div>
      <Slider {...settings} className="w-[90%]" ref={(slider) => (sliderRef.current = slider)}>
        {[1, 2, 3, 4, 5].map((cardNumber, index) => (
          <div
            key={cardNumber}
            className={`flex justify-center items-center h-64 mx-2 px-8 rounded transition-all duration-300 ${
              (currentSlide + 1 === index) && currentSlide !== 5
                ? 'bg-[#C2EFD4] text-[#224f34]'
                : 'bg-white shadow-2xl'
            }`}
            style={{ margin: '0 8px' }} // Adjust the margin for gap between cards
          >
            
            <div className="flex flex-col">
              <div className="h-[10%] lg:mb-[-5%] lg:mt-[1%] text-8xl font-robotoSlab">*</div>
              <div className="h-[20%]  lg:mb-[5%] text-3xl font-robotoSerif text-[#224f34] font-semibold lg:ml-[1%]">Sarah Paulson</div>
              <div className=" h-[70%] font-medium font-poppins text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error dignissimos consequuntur, delectus, vitae ea in sint debitis optio explicabo deleniti quibusdam! Nulla odit animi exercitationem, quidem voluptatum totam molestias!</div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center lg:mt-[12%] space-x-4 lg:mb-[10%]">
        <button
          className="text-white p-2 rounded transition-all duration-300 hover:bg-[#C2EFD4]"
          onClick={() => handleArrowClick('left')}
        >
          <Image src={rightArrowImage} alt="rightArrow" width={16} height={16} />
        </button>
        <button
          className="text-white p-2 rounded transition-all duration-300 hover:bg-[#C2EFD4]"
          onClick={() => handleArrowClick('right')}
        >
          <Image src={leftArrowImage} alt="leftArrow" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}


interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
}

export default Feedback;
