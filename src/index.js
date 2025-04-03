import app from "./app";
import dotenv from "dotenv";
import connectDB from "./db/index";

//configer dotenv
dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
  });
});
