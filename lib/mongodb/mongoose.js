import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://fistrba:GdWDLLo1Pi5oYv3t@cluster.whedpli.mongodb.net/?retryWrites=true&w=majority&appName=cluster", {
      dbName: "VibeZone",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
