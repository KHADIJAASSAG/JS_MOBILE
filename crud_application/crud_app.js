const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000; 
// QST 1 
// define route
app.get('/', (req, res) => {
  res.send('Hello every one!');
});

// run the server
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur 
    http://localhost:${PORT}`);
});





//QST 2 : 

app.use(bodyParser.json());
// local variable to store items
let items = []
// Post Endpoint to add an item to the array

app.post('/add',(req,res)=>{
  const newItem = req.body.item;
  if (newItem){
    items.push(newItem);
    res.status(201).send({message : 'Item added Successfly',items});

  }else{res.status(400).send({message:'No items provided'});
}
});


//QST 6 : 
app.get('/items', (req, res) => {
  res.status(200).send(items);
});




// QST 7 : 
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items[itemId];

  if (item) {
    res.status(200).send({ item });
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});


// QST 8 :update an existing item 
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const updatedItem = req.body.item;

  if (items[itemId] && updatedItem) {
    items[itemId] = updatedItem;
    res.status(200).send({ message: 'Item updated successfully', items });
  } else {
    res.status(400).send({ message: 'Invalid ID or item not provided' });
  }
});


//QST 9 :
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);

  if (items[itemId]) {
    items.splice(itemId, 1);
    res.status(200).send({ message: 'Item deleted successfully', items });
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});
