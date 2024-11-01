document.getElementById('book-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const pagesRead = Number(document.getElementById('pagesRead').value);
    const status = document.getElementById('status').value;

    // Calculer le pourcentage de pages lues
    const percentageRead = pages > 0 ? ((pagesRead / pages) * 100).toFixed(2) : 0;

    // Ajouter le livre au tableau
    const bookRow = document.createElement('tr');
    bookRow.innerHTML = `
        <td class="border border-gray-300 p-2">${title}</td>
        <td class="border border-gray-300 p-2">${author}</td>
        <td class="border border-gray-300 p-2">${pages}</td>
        <td class="border border-gray-300 p-2">${pagesRead}</td>
        <td class="border border-gray-300 p-2">${status}</td>
        <td class="border border-gray-300 p-2">${percentageRead}%</td>
        <td class="border border-gray-300 p-2">
            <button class="bg-red-500 text-white p-1 delete-button">Supprimer</button>
        </td>
    `;
    document.getElementById('book-list').appendChild(bookRow);

    // Mettre à jour les statistiques globales
    updateGlobalStats();

   
    document.getElementById('book-form').reset();
});

// Fonction pour mettre à jour les statistiques globales
function updateGlobalStats() {
    const rows = document.querySelectorAll('#book-list tr');
    let totalBooksRead = 0;
    let totalPagesRead = 0;
    let totalPages = 0;

    rows.forEach(row => {
        const pages = Number(row.cells[2].textContent);
        const pagesRead = Number(row.cells[3].textContent);
        totalPages += pages;
        totalPagesRead += pagesRead;
        if (row.cells[4].textContent === "Read") {
            totalBooksRead += 1;
        }
    });

    document.getElementById('global-stats').textContent = 
    `Total des livres lus : ${totalBooksRead} | Total des pages lues : ${totalPagesRead} / ${totalPages} pages`;

}

document.getElementById('book-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const row = event.target.closest('tr');
        // Demander une confirmation à l'utilisateur
        const confirmation = confirm('Êtes-vous sûr de vouloir supprimer ce livre ?');
        if (confirmation) {
            row.remove(); 
            updateGlobalStats(); 
            alert('Le livre a été supprimé avec succès !'); // Alerte de succès
        }
    }
});
