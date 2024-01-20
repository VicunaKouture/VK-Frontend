'use client'

import { useEffect, useState } from "react";

type ExclusiveOfferProps = {
  title: string;
  description: string;
  enddate: Date;
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const calculateTimeLeft = (enddate: Date) => {
  const difference = +enddate - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  }

  return timeLeft;
};

const ExclusiveOffer = ({ title, description, enddate }: ExclusiveOfferProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(enddate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(enddate));
    }, 60000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center h-screen">
      <div className="bg-green-200 pt-10 w-11/12 md:w-10/12 lg:w-8/12 xl:7/12 px-10 mx-auto flex">
        <div className="flex justify-center relative w-5/12">
          <div className="">
            <img src="/dots.png" alt="Offer Image" className="absolute bottom-7 h-20" />
          </div>
          <div className="flex-1">
            <img src="/exclusiveImg.png" alt="Offer Image" className="h-[355px] aspect-auto ml-8 z-10 relative" />
          </div>
        </div>
        <div className="mb-10 p-6 flex flex-col justify-center w-6/12">
          <div className="text-3xl font-roboto text-[#224F34] mb-4">
            {title || 'Exclusive Offer'}
          </div>
          <p className="font-poppins text-sm text-[#224F34] mb-6">
            {description || 'Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals'}
          </p>
          <div className="flex space-x-2 mb-6">
            <div className="p-2 h-16 w-14 bg-white rounded-sm shadow flex flex-col justify-center items-center">
              <p className="text-lg font-poppins text-[#224F34] font-semibold">{timeLeft.days || '06'}</p>
              <p className="text-xs font-poppins text-[#224F34]">Days</p>
            </div>
            <div className="p-2 h-16 w-14 bg-white rounded-sm shadow flex flex-col justify-center items-center">
              <p className="text-lg font-poppins text-[#224F34] font-semibold ">{timeLeft.hours || '18'}</p>
              <p className="text-xs font-poppins text-[#224F34]">Hours</p>
            </div>
            <div className="p-2 h-16 w-14 bg-white rounded-sm shadow flex flex-col justify-center items-center">
              <p className="text-lg font-poppins text-[#224F34] font-semibold">{timeLeft.minutes || '48'}</p>
              <p className="text-xs font-poppins text-[#224F34]">Min</p>
            </div>
          </div>
          <button type="button" className="font-poppins font-normal text-xs flex items-center justify-center py-3 border rounded-sm bg-[#224F34] text-white w-32">BUY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveOffer;