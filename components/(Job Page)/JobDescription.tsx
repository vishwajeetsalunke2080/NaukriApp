import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, House, LucideMailbox, Mail, Mailbox, PhoneCall, PhoneIcon, SendHorizonal, User } from "lucide-react";
import Link from "next/link";

const JobDescription: React.FC<any> = ({ JobDetails, name, email, contact, comments, handleNameChange, handleResumeChange, handleEmailChange, handleContactChange, handleCommentsChange, handleSubmit }) => {
    return (<>
        <div className="flex justify-center">
            <div className="flex flex-grow justify-start max-w-[900px] items-center gap-[0.8em] mt-[1em]">
                <ArrowLeft size={"1em"} />
                <Link href={"/Job"} passHref className=" group transition duration-300">
                    <p className="text-sm">Back to search</p>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-600"></span>
                </Link>
            </div>
        </div>


        <div className="flex justify-center items-center">
            <Card className=" w-[900px] mt-[1em] px-[2em] pt-[2em]">
                {
                    JobDetails.map((details:any, index:number) => (
                        <div key={index}>
                            <CardHeader>
                                <CardTitle>{details.title} - {details.experience["name"] ?? ""}</CardTitle>
                                <CardDescription>{details.company["name"] ?? ""}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-5 flex-col">
                                    <div className="indent-[4em] text-justify">
                                        {details.description}
                                    </div>
                                    <div className="flex gap-3">
                                        <p className="font-bold">Pay Scale: </p>
                                        {`${details.salary}/-`}
                                    </div>
                                    <div className="flex gap-3">
                                        <p className="font-bold">Date Posted: </p>
                                        {details.createdAt.split('T')[0] ?? ""}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold">Recruiter Contact: </p>
                                        <p className="flex items-center gap-2"><User size={"1em"}/>{details.recruiter["name"] ?? ""}</p>
                                        <p className="flex items-center gap-2"><PhoneIcon size={"1em"}/>{details.recruiter["contact"] ?? ""}</p>
                                        <p className="flex items-center gap-2"><Mail size={"1em"} /><Link href={`mailto:${details.recruiter["email"] ?? ""}`} passHref>{details.recruiter["email"] ?? ""}</Link></p>
                                        <p className="flex mt-1 items-center gap-2"><House size={"1em"}/><span className="max-w-[250px]">{details.recruiter["address"] ?? ""}</span></p>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    ))
                }
                <CardFooter className="flex justify-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Apply Now</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] lg:max-w-[800px] ">
                            <DialogHeader>
                                <DialogTitle className="text-center text-xl">Application Form</DialogTitle>
                                <DialogDescription className="text-center">
                                    Fill the given details to complete the application
                                </DialogDescription>
                            </DialogHeader>
                            {/* FormBegin */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4 py-4 lg:pe-[1em]">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            value={name}
                                            onChange={(e) => { handleNameChange(e.target.value); }}
                                            placeholder="John Doe"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => { handleEmailChange(e.target.value); }}
                                            placeholder="john.doe@gmail.com"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Contact
                                        </Label>
                                        <Input
                                            id="number"
                                            maxLength={10}
                                            type="tel"
                                            value={contact}
                                            onChange={(e) => { handleContactChange(e.target.value) }}
                                            placeholder="92xxxxxx95"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Resume
                                        </Label>
                                        <Input
                                            id="resume"
                                            type="file"
                                            className="col-span-3"
                                            accept="application/pdf"
                                            onChange={(e) => { handleResumeChange(e.target.files) }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Comments
                                        </Label>
                                        <Textarea className="col-span-3 resize-none" placeholder="Any message you want to share with recruiters" value={comments} onChange={(e) => { handleCommentsChange(e.target.value) }} />
                                    </div>
                                    <div className="flex items-center justify-center mt-3">
                                        <Button type="submit">Submit Application</Button>
                                    </div>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </div>
    </>);
}

export default JobDescription;