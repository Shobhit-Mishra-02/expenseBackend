import app from "./app";
import * as dotenv from "dotenv";
import connectDB from "./lib/connectDB";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("The server is running of localhost:" + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
