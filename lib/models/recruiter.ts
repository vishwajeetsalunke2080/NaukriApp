import mongoose, { model, models, Schema } from "mongoose";

const RecruiterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    address: { type: String, required: true },
    contact: { type: Number, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    company: { type: Schema.Types.ObjectId, ref: "Company", required: true, unique: true}
})


const Recruiter = models.Recruiter || model("Recruiter", RecruiterSchema);

export default Recruiter;