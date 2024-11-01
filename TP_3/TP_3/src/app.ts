import express from 'express';
import path from 'path';
import { Book, Status, Format } from './book';

const app = express();
const PORT = 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
