import mongoose, { model, models } from "mongoose";

const SectorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
})

const Sector = models.Sector || model("Sector", SectorSchema);

export default Sector;
