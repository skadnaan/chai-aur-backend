import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()










/*  FIRST APPROACH TO WRITE AND CONNECT TO DB : 

const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR" , error);
            throw error
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR", error);
        throw error
        
    }
})() */