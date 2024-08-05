import mongoose from "mongoose"

const connect = () => {

    const MONGO_URL = process.env.MONGO_URL
    const connection_state = mongoose.connection.readyState

    if (connection_state == 1) {
        console.log("already connected");
        return;
    }

    if (connection_state == 2) {
        console.log("Connecting");
        return;
    }

    try {
        mongoose.connect(MONGO_URL!, {
            dbName: "NaukriDev",
            bufferCommands: true,
        });
        console.log("connection established");

    } catch (error: any) {
        console.log(error.message);
    }

}

export default connect