import app from './app.js';
import {PORT} from './config.js';

app.listenerCount(PORT)
console.log("seridor ejecutandose en el puerto",PORT);