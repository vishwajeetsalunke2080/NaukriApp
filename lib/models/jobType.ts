import mongoose, { model, models } from "mongoose";

const JobTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
})

const JobType = models.JobType || model("JobType", JobTypeSchema);

export default JobType;