'use strict';
//Global variables
Products.productArray = [];
var productNameArray = [];
var chartDataVotes = [];
var productArray = Products.productArray;
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var click = document.getElementById('clickMe');
var photoName1 = document.getElementById('photoName1');
var photoName2 = document.getElementById('photoName2');
var photoName3 = document.getElementById('photoName3');
var ulEl = document.getElementById('list');
var button = document.getElementById('vote');
//Constructor function
function Products(src, name, size) {
  this.src = src;
  this.name = name;
  this.size = size || '100px';
  this.votes = 0;
  this.timesShown = 0;
  Products.productArray.push(this);
};
Products.voteCount = 0;
//New Products
new Products('./photos/bag.jpg', 'Bag', '100px');
new Products('./photos/bathroom.jpg', 'Bathroom', '100px');
new Products('./photos/banana.jpg', 'Banana', '100px');
new Products('./photos/boots.jpg', 'Boots', '100px');
new Products('./photos/breakfast.jpg', 'Breakfast', '100px');
new Products('./photos/bubblegum.jpg', 'Bubble Gum', '100px');
new Products('./photos/chair.jpg', 'Chair', '100px');
new Products('./photos/cthulhu.jpg', 'Cthulhu', '100px');
new Products('./photos/dog-duck.jpg', 'Dog Duck', '100px');
new Products('./photos/dragon.jpg', 'Dragon', '100px');
new Products('./photos/pen.jpg', 'Pen', '100px');
new Products('./photos/pet-sweep.jpg', 'Pet Sweep', '100px');
new Products('./photos/shark.jpg', 'Shark', '100px');
new Products('./photos/sweep.png', 'Sweep', '100px');
new Products('./photos/tauntaun.jpg', 'Tauntaun', '100px');
new Products('./photos/unicorn.jpg', 'Unicorn', '100px');
new Products('./photos/usb.gif', 'USB', '100px');
new Products('./photos/water-can.jpg', 'Water Can', '100px');
new Products('./photos/wine-glass.jpg', 'Wine Glass', '100px');

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

  item1.src = productArray[randomNumber1].src;
  item2.src = productArray[randomNumber2].src;
  item3.src = productArray[randomNumber3].src;
  //Times shown log
  productArray[randomNumber1].timesShown++;
  productArray[randomNumber2].timesShown++;
  productArray[randomNumber3].timesShown++;

  photoName1.textContent = productArray[randomNumber1].name;
  photoName2.textContent = productArray[randomNumber2].name;
  photoName3.textContent = productArray[randomNumber3].name;

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
Products.random();
//handle event function
function handleClickEvent(event) {
  event.preventDefault();
  Products.voteCount++;
  Products.productArray[event.target.dataset.index].votes++;
  if (Products.voteCount == 25) {
    drawChart();
    click.removeEventListener('click', handleClickEvent);
    for (var j in Products.productArray) {
      chartDataVotes.push(Products.productArray[j].votes);
    }
    drawChart();
  }
  Products.random();
  localStorage.busmall = JSON.stringify(productArray);
};
//event listener
click.addEventListener('click', handleClickEvent);
for (var i in Products.productArray) {
  productNameArray.push(Products.productArray[i].name);
}
//Render Chart function
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
  //Local storage
  if (localStorage.productArray) {
    productArray = JSON.parse(localStorage.productArray);
  } else {
    for (var i = 0; i < Products.name.length; i++) {
      new Products(Products.name[i]);
    }
  }
}