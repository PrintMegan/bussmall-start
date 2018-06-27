'use strict';
//variables
Products.productArray = [];
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var click = document.getElementById('clickMe');
var photoName1 = document.getElementById('photoName1');
var photoName2 = document.getElementById('photoName2');
var photoName3 = document.getElementById('photoName3');
var ulEl = document.getElementById('list');
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
console.log(Products.voteCount);
new Products('./photos/bag.jpg', 'Bag', '100px');
new Products('./photos/bathroom.jpg', 'Bathroom', '100px');
new Products('./photos/banana.jpg', 'Banana', '100px');
new Products('./photos/boots.jpg', 'Boots', '100px');
new Products('./photos/breakfast.jpg', 'Breakfast', '100px');
new Products('./photos/bubblegum.jpg', 'Bubble Gum', '100px');

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

  photoName1.textContent = Products.productArray[randomNumber1].name;
  photoName2.textContent = Products.productArray[randomNumber2].name;
  photoName3.textContent = Products.productArray[randomNumber3].name;

  item1.dataset.index = randomNumber1;
  item2.dataset.index = randomNumber2;
  item3.dataset.index = randomNumber3;

  pastRandomNumber1 = randomNumber1;
  pastRandomNumber2 = randomNumber2;
  pastRandomNumber3 = randomNumber3;
};

var pastRandomNumber1 = -1;
var pastRandomNumber2 = -2;
var pastRandomNumber3 = -3;

function renderList() {
  for (var i in Products.productArray) {
    var liEl = document.createElement('li');
    liEl.textContent = Products.productArray[i].votes + ' votes for ' + Products.productArray[i].name;
    ulEl.appendChild(liEl);
  }
};

Products.random();

function handleClickEvent(event) {
  event.preventDefault();
  Products.voteCount++;
  Products.productArray[event.target.dataset.index].votes++;
  console.log(Products.productArray[event.target.dataset.index]);
  if (Products.voteCount == 5) {
    renderList();
    click.removeEventListener('click', handleClickEvent);
  }
  Products.random();
};

click.addEventListener('click', handleClickEvent);
