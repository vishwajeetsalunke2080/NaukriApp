import mongoose, { model, models, Schema } from "mongoose";

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number, required: true },
    applicants: { type: Number, required: true},
    sector: { type: Schema.Types.ObjectId, ref: "Sector", required: true },
    jobType: { type: Schema.Types.ObjectId, ref: "JobType", required: true },
    experience: { type: Schema.Types.ObjectId, ref: "Experience", required: true },
    company: { type: Schema.Types.ObjectId, ref: "Comapny", required: true, unique: true },
    recruiter: { type: Schema.Types.ObjectId, ref: "Recruiter", required: true, unique:true },
},
{
    timestamps:true
}
)

const Jobs = models.Jobs || model("Jobs", JobSchema);
export default Jobs;







