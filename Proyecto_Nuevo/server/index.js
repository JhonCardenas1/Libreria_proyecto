import { DBConnection } from "./db.js";
import {port} from './config.js'
import app from './app.js'

DBConnection();

app.listen(port,() => {
    console.log('Corriendo aplicacion en el puerto ' + port)
})




