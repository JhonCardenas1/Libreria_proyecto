const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//import bodyParser from 'bodyParser';
//import cors from 'cors';

const app = express();
const port = 4500;

app.listen(port, () => console.log("Aplicación corriendo en puerto "+ port));


let books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}
];

app.use(cors()); //Permite controlar la seguridad de las solicitudes con REST en el HTTP

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Conversion a formato JSON


//Metodo para enviar datos 
app.post('/book', (req, res)=>{
    const book = req.body;
    //console.log(book)
    //console.log("post funcionando")
    books.push(book); //Agragamos el objeto recopilado de la web a la data
    console.log(books); // Verificar que se agrego
    res.send('El libro fue añadido a la base de datos');
})

app.get('/book', (req, res) =>{
    res.json(books);
})


app.get('/book/:isbn', (req, res) =>{
    const isbn = req.params.isbn; //lee el isbn desde la url

    //buscar en la data por isbn
    for(let book of books){
        if(book.isbn == isbn){
            res.json(books)
            return;
        }
    }
    res.status(404).send('El libro no se encontro');

})


