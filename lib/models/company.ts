import mongoose, { model, models } from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    description: { type: String, required: true },
    address: { type: String, required: true },
    employeeCount: { type: Number, required: true },
    contact: { type: Number, required: true, unique: true },
})


const Company = models.Company || model("Company", CompanySchema);

export default Company;