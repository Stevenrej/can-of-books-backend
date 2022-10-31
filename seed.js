
'use strict';

const mongoose = require('mongoose');



require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {

await Book.create({
  title: 'House of the Scorpion',
  description: 'The House of the Scorpion (2002) is a science fiction young adult novel by Nancy Farmer. It is set in the future and mostly takes place in Opium, a country which separates Aztlán (formerly Mexico) and the United States. The main character Matteo Alacrán, or Matt, is a young clone of a drug lord of the same name, usually called "El Patrón". It is a story about the struggle to survive as a free individual and the search for a personal identity.',
  rating: 5,
});



await Book.create({
  title: 'Fire & Blood',
  description: 'Fire & Blood is a fantasy book by American writer George R. R. Martin and illustrated by Doug Wheatley. It tells the history of House Targaryen, the dynasty that ruled the Seven Kingdoms of Westeros in the backstory of his series A Song of Ice and Fire. Although originally planned for publication after the completion of the series, Martin has revealed his intent to publish the history in two volumes as the material had grown too large. The first volume was released on November 20, 2018.',
  rating: 4,
});

await Book.create({
  title: 'Eragon',
  description: 'Eragon is the first book in The Inheritance Cycle by American fantasy writer Christopher Paolini. The book tells the story of a farm boy named Eragon, who finds a mysterious stone in the mountains. The stone is revealed to be a dragon egg, and a dragon he later names Saphira hatches from it. When the evil King Galbatorix finds out about the egg, he sends monstrous servants to acquire it, making Eragon and Saphira flee from their hometown with a storyteller named Brom. Brom, an old member of an extinct group called the Dragon Riders, teaches Eragon about "The Ways of the Rider."',
  rating: 5,
});


console.log('Books were created');


mongoose.disconnect();
}

seed();