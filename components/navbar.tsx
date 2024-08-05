"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import ModeToggle from "./modeToggle"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { BriefcaseBusiness, CircleHelp, Mail } from "lucide-react"

export const Navbar: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (<>
    <nav className="sticky top-0 backdrop-blur-sm bg-white/30 z-50">
      <div className="flex justify-between items-center px-[3em] py-[2em]" >
        <div className="flex flex-grow justify-between items-center">
          <Link href={"/"} passHref><p className="p-3 bg-green-300 rounded-full">Company Logo</p></Link>
          <div className="flex flex-grow justify-center items-center gap-[2em]">
            <Link href={"/Job"} passHref className="flex gap-2"><BriefcaseBusiness /> <p>Explore Jobs</p></Link>
            <Link href={"/Job"} passHref className="flex gap-2"><CircleHelp/><p>Help & Support</p></Link>
            <Link href={"/Job"} passHref className="flex gap-2"><Mail/> <p>Contact</p></Link>
          </div>
        </div>
        <ModeToggle />
      </div>
      <Separator className="h-[0.10em]" />
    </nav>
  </>)
}