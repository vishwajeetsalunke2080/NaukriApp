import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { City, State } from 'country-state-city'

interface FilterMenuProps {
  duration: string[];
  sector: string[];
  experience: string[];
  jobType: string[];
  minSalary: number;
  maxSalary: number;
  handleDurationChange: (value: string) => void;
  handleExperienceChange: (value: string) => void;
  handleJobTypeChange: (value: string) => void;
  handleMaxSalaryChange: (value: string) => void;
  handleMinSalaryChange: (value: string) => void;
  handleLocationChange: (value: string) => void;
  handleSectorChange: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  duration,
  sector,
  experience,
  jobType,
  minSalary,
  maxSalary,
  handleDurationChange,
  handleExperienceChange,
  handleJobTypeChange,
  handleMaxSalaryChange,
  handleMinSalaryChange,
  handleLocationChange,
  handleSectorChange,
  handleSubmit
}) => {
  const [stateCode, setStateCode] = React.useState();
  const [cityList, setCityList] = React.useState([]);

  const stateList = State.getStatesOfCountry("IN")

  React.useEffect(() => {
    if (stateCode != "" || stateList != undefined) { 
      const data: any = City.getCitiesOfState("IN", `${stateCode}`)
      setCityList(data)
    }
  }, [stateCode]);

  return (
    <div>
      <Card className="w-[350px] shadow shadow-lg mt-[5em]">
        <CardHeader>
          <CardTitle>Sort Opportunities</CardTitle>
          <CardDescription>Find the most suitable job by adjusting filters</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <FilterSelect
                label="Duration"
                items={duration}
                onValueChange={handleDurationChange}
              />
              <FilterSelect
                label="Sector"
                items={sector}
                onValueChange={handleSectorChange}
              />
              <FilterSelect
                label="Experience"
                items={experience}
                onValueChange={handleExperienceChange}
              />
              <div className="flex flex-col space-y-1.5">
                <Label>Salary Range (per month)</Label>
                <div className="flex flex-col justify-around">
                  <div className="flex justify-between mt-3 gap-[3em] text-muted-foreground">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minSalary}
                      min={0}
                      onChange={(e) => handleMinSalaryChange(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxSalary}
                      min={0}
                      onChange={(e) => handleMaxSalaryChange(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Label>Job Location</Label>
              {/* select state */}
              <Select onValueChange={(value:any)=>{setStateCode(value)}}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {
                      stateList.map((city: any, index) => (
                        <SelectItem value={city.isoCode} key={index}>
                          {city.name}
                        </SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* dynamic city load on state select */}
              <Select onValueChange={(value)=>{handleLocationChange(value)}}>
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup title="Cities">
                    {
                      cityList!.map((city: any, index) => (
                        <SelectItem value={city.name} key={index}>
                          {city.name}
                        </SelectItem>
                      ))

                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FilterSelect
                label="Type"
                items={jobType}
                onValueChange={handleJobTypeChange}
              />
              <Button type="submit">Search</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
        </CardFooter>
      </Card>
    </div>
  );
};

interface FilterSelectProps {
  label: string;
  items: string[];
  onValueChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, items, onValueChange }) => (
  <div className="flex flex-col space-y-1.5">
    <Label>{label}</Label>
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent position="popper">
        {items.map((item, index) => (
          <SelectItem value={item} key={index}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default FilterMenu;
