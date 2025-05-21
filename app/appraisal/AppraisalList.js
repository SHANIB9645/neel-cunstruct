"use client";
import React from "react";
import Image from "next/image";
import Select from "react-select";
import { ChevronLeft, ChevronRight } from "lucide-react";

const options = [
  { value: "Rating*", label: "Rating*" },
  { value: "Rating*", label: "Rating*" },
];
function AppraisalList() {
  return (
    <div className="border border-[#ffffff1a] backdrop-blur-[17] rounded-[5px] bg_gradiant_main relative">
      <div className="absolute radial_div  w-[190px] aspect-square right-80  top-20 bg-[#00A653]"></div>
      <table className="w-full">
        <thead className="border-b border-[#ffffff1a] ">
          <tr>
            <th></th>
            <th className="">NC ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>
              <div className="flex items-center">
                Behaviour{" "}
                <Image
                  src="/svg/noti.svg"
                  className="w-auto ms-1"
                  width={300}
                  height={300}
                  alt="user"
                />
              </div>
            </th>
            <th>
              {" "}
              <div className="flex items-center">
                Efficienc{" "}
                <Image
                  src="/svg/noti.svg"
                  className="w-auto ms-1"
                  width={300}
                  height={300}
                  alt="user"
                />
              </div>{" "}
            </th>
            <th>
              <div className="flex items-center">
                Dedication to Work{" "}
                <Image
                  src="/svg/noti.svg"
                  className="w-auto ms-1"
                  width={300}
                  height={300}
                  alt="user"
                />
              </div>{" "}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#ffffff1a]  ">
            <td>
              <Image
                src="/other/basil.png"
                className="w-10"
                width={300}
                height={300}
                alt="user"
              />
            </td>
            <td>0015</td>
            <td>Baisil Varughese Oommen</td>
            <td>Deputy Managing Director</td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
                
              />
            </td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              {" "}
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
                // menuIsOpen={true} 
              />
            </td>
            <td>
              <button className="px-2 py-1 rounded bg-[#00963F]">Submit</button>
            </td>
          </tr>
          <tr className="border-b border-[#ffffff1a]  ">
            <td>
              <Image
                src="/other/basil.png"
                className="w-10"
                width={300}
                height={300}
                alt="user"
              />
            </td>
            <td>0015</td>
            <td>Baisil Varughese Oommen</td>
            <td>Deputy Managing Director</td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              {" "}
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <button className="px-2 py-1 rounded bg-[#00963F]">Submit</button>
            </td>
          </tr>
          <tr className="border-b border-[#ffffff1a]  ">
            <td>
              <Image
                src="/other/basil.png"
                className="w-10"
                width={300}
                height={300}
                alt="user"
              />
            </td>
            <td>0015</td>
            <td>Baisil Varughese Oommen</td>
            <td>Deputy Managing Director</td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              {" "}
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <button className="px-2 py-1 rounded bg-[#00963F]">Submit</button>
            </td>
          </tr>
          <tr className="border-b border-[#ffffff1a]  ">
            <td>
              <Image
                src="/other/basil.png"
                className="w-10"
                width={300}
                height={300}
                alt="user"
              />
            </td>
            <td>0015</td>
            <td>Baisil Varughese Oommen</td>
            <td>Deputy Managing Director</td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              {" "}
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <button className="px-2 py-1 rounded bg-[#00963F]">Submit</button>
            </td>
          </tr>
          <tr className="border-b border-[#ffffff1a]  ">
            <td>
              <Image
                src="/other/basil.png"
                className="w-10"
                width={300}
                height={300}
                alt="user"
              />
            </td>
            <td>0015</td>
            <td>Baisil Varughese Oommen</td>
            <td>Deputy Managing Director</td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              {" "}
              <Select
                className=""
                defaultValue={options[0]}
                options={options}
              />
            </td>
            <td>
              <button className="px-2 py-1 rounded bg-[#00963F]">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end py-1">
         <div className="text-[12px] flex items-center">Rows per page:
             <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
             </select>
                <div className="px-2">1-20 of 3000</div>
                <div className="flex"><span className="me-3">  <ChevronLeft size={14} /></span><span  className="me-3">  <ChevronRight size={14}  /></span></div>
             </div>
      </div>
    </div>
  );
}

export default AppraisalList;
