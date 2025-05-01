"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Maximize } from "lucide-react";

function PhotoGallery() {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-4">
        <h6 className="text-white text-[14px]">Photo Gallery</h6>
        <div className="flex items-center">
          <Image
            src={"/svg/addImage.png"}
            alt="image"
            width={100}
            height={100}
            className="w-auto "
          />
          <span className="text-[#00A653] text-small ms-1">Upload Photos</span>
        </div>
      </div>
      <div className="relative">
        <Swiper 
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation , Pagination ,Autoplay]} className="mySwiper">
          <SwiperSlide>
            <Image
              src={"/gallery/1.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-[4/3]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/gallery/2.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-[4/3]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/gallery/3.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-[4/3]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/gallery/4.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-[4/3]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/gallery/5.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-[4/3]"
            />
          </SwiperSlide>
          <div className=" absolute top-[40%] left-2  z-[9999] w-10 h-10 bg-[#747571] rounded-full flex justify-center items-center border border-[#F7F8F7] cursor-pointer custom-prev "> <ArrowLeft /></div>
          <div className="  absolute top-[40%] right-2 z-[9999] w-10 h-10 bg-[#747571] rounded-full flex justify-center items-center border border-[#F7F8F7] cursor-pointer  custom-next"><ArrowRight /></div>
        </Swiper>
       
       <div className="z-[999] absolute top-3 right-3 cursor-pointer">
         <Maximize />
       </div>
       <div className="absolute z-[999] right-4 text-small bottom-3 ">+4 more</div>
        
      </div>
    </div>
  );
}

export default PhotoGallery;
