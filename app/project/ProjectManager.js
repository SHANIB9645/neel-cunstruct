"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; 
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules'; 
function ProjectManager() {
  return (
    <div className="fixed max-w-[310px]  right-4 bottom-10 z-[9999] managerCard rounded-[10px] border border-[#ffffff1a] ">
      <div className="px-2 py-2">
        <div className="cursor-pointer flex items-center">
          <div className="flex items-center">
            
              <Image
                src={"/other/manager.png"}
                alt="manager"
                width={150}
                height={150}
                className="w-15 shrink-0 "
              />
             
            <div className="ms-2">
              <p className="text-[#C7C7C7] text-[8px] font-semibold uppercase">
                Project Manager
              </p>
              <h6 className="text-white  fonr-semibold">Sajan Jacob</h6>
              <p className="text-small text-[#C7C7C7] whitespace-nowrap font-semibold">
                <span className="text-[#00A653] me-1   ">20</span>Assigned Projects
              </p>
            </div>
          </div>
          <div className="ms-20">
            <Image
              src={"/svg/CaretRight.svg"}
              alt="manager"
              width={100}
              height={100}
              className="w-fit"
            />
          </div>
        </div>
        <div className="   managerGalery">
            <h4 className="text-[#C7C7C7] font-medium text-small mb-1">Recently Assigned Projects</h4>
            <div>
            <div className="relative">
        <Swiper 
        slidesPerView={1.7}
        spaceBetween={10}
         
         
        pagination={{
          clickable: true,
        }}
        modules={[  Pagination]} className="PrifleSwiper">
          <SwiperSlide>
             <div>
             <Image
              src={"/gallery/p1.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-square"
            />
             <p className="text-[14px] font-medium">NC833</p>
             </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
            <Image
              src={"/gallery/p2.png"}
              alt="slide"
              width={1000}
              height={1000}
              className="w-full aspect-square"
            />
            <p className="text-[14px] font-medium">NC833</p>
            </div>
          </SwiperSlide>
       
          </Swiper>
       
    
        
      </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectManager;
