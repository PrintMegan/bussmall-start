'use strict';

Products.productArray = [];
Products.timesShown = [];
Products.rankProducts = [];
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var section = document.getElementById('clickMe');

function Products(src, name, size) {
  this.src = src;
  this.name = name;
  this.size = size;

  if (!size) {
    this.size = '100px';
  }
  this.rankProducts = 0;
  this.timesShown = 0;
  Products.productArray.push(this);
  Products.rankProducts.push(this);
  Products.timesShown.push(this);
};


//pastRandomNumber1??
// Products.rankProducts = function () {
//   for (var i in Products.productArray) {
//     console.log(Products.productArray[i].rankProducts);
//   }
// };

var pastRandomNumber1 = 0;
var pastRandomNumber2 = 1;
var pastRandomNumber3 = 2;
Products.random = function () {
  do {
    var randomNumber1 = Math.floor(Math.random() * Products.productArray.length);

  } while (randomNumber1 === randomNumber2 || randomNumber1 === randomNumber3 || randomNumber1 === pastRandomNumber1 || randomNumber1 === pastRandomNumber2 || randomNumber1 === pastRandomNumber3);

  do {
    var randomNumber2 = Math.floor(Math.random() * Products.productArray.length);

  } while (randomNumber1 === randomNumber2 || randomNumber2 === randomNumber2 || randomNumber2 === randomNumber3 || randomNumber2 === pastRandomNumber1 || randomNumber2 === pastRandomNumber2 || randomNumber2 === pastRandomNumber3);


  do {
    var randomNumber3 = Math.floor(Math.random() * Products.productArray.length);

  } while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2 || randomNumber3 === randomNumber3 || randomNumber3 === pastRandomNumber1 || randomNumber3 === pastRandomNumber2 || randomNumber3 === pastRandomNumber3);


  item1 = Products.productArray[randomNumber1].src;
  item2 = Products.productArray[randomNumber2].src;
  item3 = Products.productArray[randomNumber3].src;

  item1.dataset.index = randomNumber1;
  item2.dataset.index = randomNumber2;
  item3.dataset.index = randomNumber3;

  pastRandomNumber1 = randomNumber1;
  pastRandomNumber2 = randomNumber2;
  pastRandomNumber3 = randomNumber3;
};

new Products('./photos/bag.jpg', 'Bag', '100px');
new Products('./photos/bathroom.jpg', 'Bathroom', '100px');
new Products('./photos/banana.jpg', 'Banana', '100px');
new Products('./photos/boots.jpg', 'Boots', '100px');
new Products('./photos/breakfast.jpg', 'Breakfast', '100px');
new Products('./photos/bubblegum.jpg', 'Bubble Gum', '100px');

