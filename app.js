'use strict';
//variables
Products.productArray = [];
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var click = document.getElementById('clickMe');
//function for photos to choose from
function Products(src, name, size) {
  this.src = src;
  this.name = name;
  this.size = size || '100px';
  this.votes = 0;
  this.timesShown = 0;
  Products.productArray.push(this);
};
Products.voteCount = 0;
// var voteCount1 = 0;
console.log(Products.voteCount);
new Products('./photos/bag.jpg', 'Bag', '100px');
new Products('./photos/bathroom.jpg', 'Bathroom', '100px');
new Products('./photos/banana.jpg', 'Banana', '100px');
new Products('./photos/boots.jpg', 'Boots', '100px');
new Products('./photos/breakfast.jpg', 'Breakfast', '100px');
new Products('./photos/bubblegum.jpg', 'Bubble Gum', '100px');

// //Function for ranks for photos
// Products.rankProducts = function () {
//   for (var i in Products.productArray) {
//     console.log(Products.productArray[i].rankProducts);
//   }
// };


//do while loops for random numbers for photos to change
Products.random = function () {
  var randomNumber1 = 0;
  do {
    randomNumber1 = Math.floor(Math.random() * Products.productArray.length);

  } while (randomNumber1 === pastRandomNumber1 || randomNumber1 === pastRandomNumber2 || randomNumber1 === pastRandomNumber3);

  var randomNumber2 = 0;
  do {
    randomNumber2 = Math.floor(Math.random() * Products.productArray.length);

  } while (randomNumber2 === randomNumber1 || randomNumber2 === pastRandomNumber1 || randomNumber2 === pastRandomNumber2 || randomNumber2 === pastRandomNumber3);


  var randomNumber3 = 0;
  do {
    randomNumber3 = Math.floor(Math.random() * Products.productArray.length);

  } while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2 || randomNumber3 === pastRandomNumber1 || randomNumber3 === pastRandomNumber2 || randomNumber3 === pastRandomNumber3);

  item1.src = Products.productArray[randomNumber1].src;
  item2.src = Products.productArray[randomNumber2].src;
  item3.src = Products.productArray[randomNumber3].src;
  //Times shown log
  Products.productArray[randomNumber1].timesShown++;
  Products.productArray[randomNumber2].timesShown++;
  Products.productArray[randomNumber3].timesShown++;

  item1.dataset.index = randomNumber1;
  item2.dataset.index = randomNumber2;
  item3.dataset.index = randomNumber3;

  pastRandomNumber1 = randomNumber1;
  pastRandomNumber2 = randomNumber2;
  pastRandomNumber3 = randomNumber3;
};

var pastRandomNumber1 = 0;
var pastRandomNumber2 = 1;
var pastRandomNumber3 = 2;

Products.random();


function handleClickEvent(event) {
  event.preventDefault();
  Products.random();
  Products.voteCount++;
  console.log(Products.voteCount);
  Products.productArray[event.target.dataset.index].votes++;

  if (Products.voteCount == 5) {
    click.removeEventListener('click', handleClickEvent);  
  }
};


click.addEventListener('click', handleClickEvent);
