"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { JobAction } from "@/redux/JobAction";
import { ArrowRightSquare, BriefcaseBusiness, Globe, GraduationCap, MapPinned, RadioTower, Search, User } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  return (
    <>
      <div className=" flex sm:flex-col md:flex-col lg:flex-row justify-center gap-[2em] mx-[5em] my-[2em]">
        <div className=" lg:min-w-[400px] max-w-[450px]">
          <Card className="max-h-[550px] lg:min-h-[500px] p-[2em] overflow-auto">
            <CardTitle>
              Statistics
            </CardTitle>
            <Separator className="mt-3" />
            <div className="flex flex-col mt-5 gap-5 ">
              <Card className="flex gap-5 p-5">
                <User /> <p>850 Registered Candidates</p>
              </Card>
              <Card className="flex gap-5 p-5">
                <BriefcaseBusiness /> <p>50 Recruiting Partners</p>
              </Card>
              <Card className="flex gap-5 p-5">
                <Globe /> <p>10+ Government Agencies</p>
              </Card>
              <Card className="flex gap-5 p-5">
                <GraduationCap /> <p>4550 Students Placed</p>
              </Card>
              <Card className="flex gap-5 p-5">
                <MapPinned /> <p>42+ Job Locations</p>
              </Card>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-[2em]">
          <div className=" flex-grow">
            <Card className="p-[2em] overflow-auto">
              <div className="flex justify-center gap-2">
                <Input placeholder="Search for Jobs" className="text-lg bg-accent flex-grow" />
                <Button variant="secondary" className="gap-2"><Search size={"1em"}/>Search</Button>
              </div>
              <div className="flex justify-between mt-5 items-center">
                <p className="border border-2 p-2 rounded-l pr-3">News</p>
                <div className="flex-grow">
                  <Separator />
                  <div className="flex sm:p-[0.51em] overflow-x-hidden">
                    <div className="flex text-nowrap animate-marquee ">
                      <p className="text-md mx-4">• Notification 1</p>
                      <p className="text-md mx-4">• Notification 2</p>
                      <p className="text-md mx-4">• Notification 3</p>
                      <p className="text-md mx-4">• Notification 4</p>
                      <p className="text-md mx-4">• Notification 5</p>
                    </div>
                  </div>
                  <Separator />
                </div>
              </div>
            </Card>
          </div>
          <div className=" flex-grow">
            <Card className="p-[2em] lg:h-[300px] overflow-auto">
              <CardTitle className="flex gap-[0.7em]"><BriefcaseBusiness />Explore Jobs</CardTitle>
              <Separator className="mt-3" />
              <div className="flex mt-[2em] gap-5 flex-wrap">
                <Card className="p-5 hover:shadow hover:shadow-md">
                  <Link href={"#"} passHref><p>Internships</p></Link>
                </Card>
                <Card className="p-5 hover:shadow hover:shadow-md">
                  <Link href={"/"} passHref><p>Government Jobs</p></Link>
                </Card>
                <Card className="p-5 hover:shadow hover:shadow-md">
                  <Link href={"/"} passHref><p>Remote Jobs</p></Link>
                </Card>
                <Card className="p-5 hover:shadow hover:shadow-md">
                  <Link href={"/"} passHref><p>Freelancing</p></Link>
                </Card>
                <Card className="p-5 hover:shadow hover:shadow-md">
                  <Link href={"/"} passHref><p>Full Time Jobs</p></Link>
                </Card>
                <Card className="p-5 hover:shadow hover:shadow-md">
                  <Link href={"/"} passHref><p>Experienced Professionals</p></Link>
                </Card>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </>
  );
}
