import dotenv from "dotenv";
dotenv.config(); 
import express from "express"
import cors from "cors"
import { connectDB }  from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRouter.js";






//app configuration
const app = express();
const port = 4000

//middleware
app.use(cors()); //access from any frontend
app.use(express.json());

//db
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images", express.static("uploads")) //serve static files from uploads directory
app.use("/api/user", userRouter); // Add user routes



app.get("/", (req, res) => {
    res.send("API Working");
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://yosrmrabet:<db_password>@cluster0.on9o6mp.mongodb.net/?