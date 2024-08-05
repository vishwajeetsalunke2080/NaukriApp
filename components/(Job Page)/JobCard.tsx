import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface Job{
    title: string;
    experience: string;
    company: string;
    salary: string;
    description: string;
    jobID: string;
    datePosted: string;
}

interface JobCardProps{
    JobList: Job[];
}

const JobCard : React.FC<JobCardProps> = ({JobList}) => {    
    return (
        <div className="mt-[5em] flex gap-[1.5em] flex-col">
            {
                JobList.map((e: any, index: number): any => {
                    return (
                        <Card className=" w-[900px] shadow shadow-md " key={index}>
                            <CardHeader>
                                <CardTitle>{e.title} - {e.experience["name"] ?? ""}</CardTitle>
                                <div className="flex justify-between text-muted-foreground">
                                    <div>
                                        {e.company["name"] ?? ""}
                                    </div>
                                    <p className="text-sm ">{`₹${e.salary} per month`}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-3">{e.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-2">
                                    <Button><Link href={`Job/${e._id}`} passHref> Apply Now</Link></Button>
                                </div>
                                <p className="text-xs text-muted-foreground italic">published on  -  {e.createdAt.split('T')[0] ?? ""}</p>
                            </CardFooter>
                        </Card>
                    )
                })
            }

        </div>
    );
}

export default JobCard;