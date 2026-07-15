// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("DB Connected");
// }
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "food-del"
        });

        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};