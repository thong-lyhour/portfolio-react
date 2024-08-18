"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Name from "./name";
import Link from "next/link";
import { links } from "@/lib/constant";


const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <Name />
          </Link>
        </div>

        <nav className="flex flex-col justify-start items-start gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
