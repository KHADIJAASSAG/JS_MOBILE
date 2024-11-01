// Importer les modules nécessaires
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Book } = require('./src/book'); // Assurez-vous que le chemin est correct pour votre projet

// Initialiser l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser les données des formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Tableau pour stocker les livres
const books = [];

// Route pour ajouter un livre
app.post('/add-book', (req, res) => {
    const { title, author, pages, pagesRead, price, status, format, suggestedBy } = req.body;
    const newBook = new Book(title, author, pages, pagesRead, price, status, format, suggestedBy);
    books.push(newBook);
    console.log(`Livre ajouté : ${newBook.title} par ${newBook.author}`);
    res.json({ message: 'Livre ajouté avec succès!', book: newBook });
});

// Route pour récupérer tous les livres
app.get('/books', (req, res) => {
    res.json(books);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
