import {Router} from 'express';
import { obtener_libro, todos_libros, crear_libro, actualizar_libro, borrar_libro } from '../Controller/bookcontrollers.js';

const router = Router();

router.get('/',(req, res) =>res.send ('Home Page'))
router.get('/books', todos_libros)
router.get('/books/:isbn', obtener_libro);
router.post('/books', crear_libro )
router.put('/books/:id',actualizar_libro)
router.delete('/books/:id', borrar_libro)


export default router;