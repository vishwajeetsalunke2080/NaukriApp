import mongoose, { model, models } from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
})

const Experience = models.Experience || model("Experience", ExperienceSchema);

export default Experience;