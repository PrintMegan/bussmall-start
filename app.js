'use strict';
//Global variables
Product.productsArray = [];
var productNameArray = [];
var chartDataVotes = [];
var productsArray = Product.productsArray;
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var click = document.getElementById('clickMe');
var photoName1 = document.getElementById('photoName1');
var photoName2 = document.getElementById('photoName2');
var photoName3 = document.getElementById('photoName3');
var ulEl = document.getElementById('list');
var button = document.getElementById('vote');
//Constructor function for objects to pass through
function Product(src, name, size) {
  this.src = src;
  this.name = name;
  this.size = size || '100px';
  this.votes = 0;
  this.timesShown = 0;
  Product.productsArray.push(this);
};
Product.voteCount = 0;
//New Product/Objects for constructor function
new Product('./photos/bag.jpg', 'Bag', '100px');
new Product('./photos/bathroom.jpg', 'Bathroom', '100px');
new Product('./photos/banana.jpg', 'Banana', '100px');
new Product('./photos/boots.jpg', 'Boots', '100px');
new Product('./photos/breakfast.jpg', 'Breakfast', '100px');
new Product('./photos/bubblegum.jpg', 'Bubble Gum', '100px');
new Product('./photos/chair.jpg', 'Chair', '100px');
new Product('./photos/cthulhu.jpg', 'Cthulhu', '100px');
new Product('./photos/dog-duck.jpg', 'Dog Duck', '100px');
new Product('./photos/dragon.jpg', 'Dragon', '100px');
new Product('./photos/pen.jpg', 'Pen', '100px');
new Product('./photos/pet-sweep.jpg', 'Pet Sweep', '100px');
new Product('./photos/shark.jpg', 'Shark', '100px');
new Product('./photos/sweep.png', 'Sweep', '100px');
new Product('./photos/tauntaun.jpg', 'Tauntaun', '100px');
new Product('./photos/unicorn.jpg', 'Unicorn', '100px');
new Product('./photos/usb.gif', 'USB', '100px');
new Product('./photos/water-can.jpg', 'Water Can', '100px');
new Product('./photos/wine-glass.jpg', 'Wine Glass', '100px');

//do while loops for random numbers for photos to change when clicked pulling random image src
Product.random = function () {
  var randomNumber1 = 0;
  do {
    randomNumber1 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber1 === pastRandomNumber1 || randomNumber1 === pastRandomNumber2 || randomNumber1 === pastRandomNumber3);
  var randomNumber2 = 0;
  do {
    randomNumber2 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber2 === randomNumber1 || randomNumber2 === pastRandomNumber1 || randomNumber2 === pastRandomNumber2 || randomNumber2 === pastRandomNumber3);
  var randomNumber3 = 0;
  do {
    randomNumber3 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2 || randomNumber3 === pastRandomNumber1 || randomNumber3 === pastRandomNumber2 || randomNumber3 === pastRandomNumber3);

  item1.src = productsArray[randomNumber1].src;
  item2.src = productsArray[randomNumber2].src;
  item3.src = productsArray[randomNumber3].src;
  //How many times photo appears on the screen counter below
  productsArray[randomNumber1].timesShown++;
  productsArray[randomNumber2].timesShown++;
  productsArray[randomNumber3].timesShown++;

  photoName1.textContent = productsArray[randomNumber1].name;
  photoName2.textContent = productsArray[randomNumber2].name;
  photoName3.textContent = productsArray[randomNumber3].name;

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
Product.random();
//handle event function. Adds click votes to photos. draws graph chart after photos have been clicked 25 times
function handleClickEvent(event) {
  event.preventDefault();
  Product.voteCount++;
  Product.productsArray[event.target.dataset.index].votes++;
  if (Product.voteCount == 25) {
    drawChart();
    click.removeEventListener('click', handleClickEvent);
    for (var j in Product.productsArray) {
      chartDataVotes.push(Product.productsArray[j].votes);
    }
    drawChart();
  }
  Product.random();
  localStorage.busmall = JSON.stringify(productsArray);
};
//event listener
click.addEventListener('click', handleClickEvent);
for (var i in Product.productsArray) {
  productNameArray.push(Product.productsArray[i].name);
}
//Render Chart function for after photos have been clicked 25 times
function drawChart() {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: productNameArray,
      datasets: [{
        label: '# of Votes',
        data: chartDataVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  //Local storage. checks if user has been to site. If so starts them where they were before. If not. starts them at the beginning.
  if (localStorage.productsArray) {
    productsArray = JSON.parse(localStorage.productsArray);
  } else {
    for (var i = 0; i < Product.name.length; i++) {
      new Product(Product.name[i]);
    }
  }
}