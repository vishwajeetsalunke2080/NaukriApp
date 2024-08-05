import Image from "next/image";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";
import Link from "next/link";

const Footer = () => {
    return (<>
        <Card className="flex flex-col mt-[3em]" >
            <Separator className="h-[0.2em] rounded-full" />
            <div className="flex gap-[3em] px-[7em] justify-between items-center">
                <div className="flex flex-col gap-[2em]">
                    <Link href={"/"} passHref><p className="p-3 bg-green-300 text-center rounded-full">Company Logo</p></Link>
                    <p className="text-justify max-w-[18em]">Shipkart is a popular online shopping website for your favourite clothing brands</p>
                </div>
                <div className="flex gap-[3em] py-[3em]">
                    <div className="flex flex-col w-[8em]">

                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">FAQ</a>
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">Terms of use</a>
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col w-[8em]">

                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">About us</a>
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">Contact</a>
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">Careers</a>
                    </div>
                    <div className="flex flex-col w-[8em]">
                        {/* <span className="mb-[3em] text-slate-400">SHOP</span> */}
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">My Account</a>
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">Checkout</a>
                        <a className="text-slate-500 hover:text-black hover:cursor-pointer my-2">Cart</a>
                    </div>
                </div>
                <div className="flex flex col">
                    <p className="text-slate-500">Crafted with ❤️ <br /> by <a href="mailto:salunkevishwajeet577@gmail.com"> Vishwajeet Salunke</a></p>
                </div>
            </div>
        </Card>
    </>);
};

export default Footer;
