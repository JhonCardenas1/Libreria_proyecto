import mongoose from "mongoose";
import { uri } from "./config.js";

//const uri = 'mongodb://localhost:27017/libreria'

export async function DBConnection(){
    try{
        const db = await mongoose.connect(uri);
        console.log('conexion establecida '+ db.connection.name)
    }
    catch(error){
        console.log(error);
    }
}









