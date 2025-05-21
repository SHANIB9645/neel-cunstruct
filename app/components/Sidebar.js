import Image from "next/image";
import Link from "next/link";
import React from "react"; 

const menuItems = [
    { href: "/speed", src: "/svg/speed.svg", alt: "speed", active: false },
    { href: "/", src: "/svg/corporate.svg", alt: "corporate", active: false },
    { href: "/receipt", src: "/svg/receipt.svg", alt: "receipt" , active: false },
    { href: "/badge", src: "/svg/badge.svg", alt: "badge" , active: false},
    { href: "/appraisal", src: "/svg/person_book.svg", alt: "person_book" , active: true},
    { href: "/lab_profile", src: "/svg/lab_profile.svg", alt: "lab_profile", active: false },
    { href: "/account_balance_wallet", src: "/svg/account_balance_wallet.svg", alt: "account_balance_wallet", active: false },
    { href: "/person_check", src: "/svg/person_check.svg", alt: "person_check", active: false },
    { href: "/event", src: "/svg/event.svg", alt: "event", active: false },
    { href: "/contract", src: "/svg/contract.svg", alt: "contract" },
    { href: "/directions_car", src: "/svg/directions_car.svg", alt: "directions_car", active: false },
    { href: "/flight", src: "/svg/flight.svg", alt: "flight" , active: false},
    { href: "/contact_support", src: "/svg/contact_support.svg", alt: "contact_support", active: false },
    { href: "/image", src: "/svg/image.svg", alt: "image", active: false },
  ];
 

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-[80px] h-screen bg-[#3737376E] px-2 py-4 flex flex-col items-center justify-between overflow-y-auto">
      <div>
        <Link href={"/"} className="flex justify-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-12"
          />
        </Link>
        <ul className="flex flex-col gap-6 mt-6 items-center justify-center">
      {menuItems.map((item, index) => (
        <li key={index} className={`cursor-pointer ${item.active ? 'active_menu' : ''}`}>
          <Link href={item.href}>
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={400}
              className="w-auto"
            />
          </Link>
        </li>
      ))}
    </ul>
      </div>
      <div className="mt-10">
      <ul className="flex flex-col gap-6   items-center justify-center w-full">
      
        <li>
          <div className="cursor-pointer">
            <Image
              src={"/svg/light_mode.svg"}
              alt="light"
              width={400}
              height={400}
              className="w-auto"
            />
          </div>
        </li>
        <li >
          <Link href="/accont" className="cursor-pointer">
            <Image
              src={"/svg/account_circle.svg"}
              alt="light"
              width={400}
              height={400}
              className="w-auto"
            />
          </Link>
        </li>
        <li className="border-t border-[#98A2B326] pt-5 w-full flex justify-center">
          <div className="cursor-pointer">
            <Image
              src={"/svg/last_page.svg"}
              alt="last_page"
              width={400}
              height={400}
              className="w-auto"
            />
          </div>
        </li>
      
    </ul>
      </div>
    </div>
  );
}

export default Sidebar;
