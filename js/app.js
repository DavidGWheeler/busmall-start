'use strict';

var productImages = [];
var clickCount = [];
var displayedCount = [];
var totalClicks = 0;
var pickLeft;
var pickCenter;
var pickRight;
var pickLeftProduct = document.getElementById('pickLeft');
var pickCenterProduct = document.getElementById('pickCenter');
var pickRightProduct = document.getElementById('pickRight');


function Products(name, path) {
  this.name = name;
  this.path = path;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
  productImages.push(this);
}

var bag = new Products('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products('Banana Slicer', 'img/banana.jpg');
var bathroom = new Products('Brown and Browse', 'img/bathroom.jpg');
var boots = new Products('Toe-less Rain Boots', 'img/boots.jpg');
var breakfast = new Products('Fast Break-fast', 'img/breakfast.jpg');
var bubblegum = new Products('Meat Gum Ball', 'img/bubblegum.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulu = new Products('Cthulhu Toy', 'img/cthulhu.jpg');
var dogDuck = new Products('Dog Ducker', 'img/dog-duck.jpg');
var dragon = new Products('Dragon Meat', 'img/dragon.jpg');
var pen = new Products('Untensil Pen Caps', 'img/pen.jpg');
var pawBroom = new Products('Pet Paw Broom', 'img/pet-sweep.jpg');
var scissors = new Products('Pizza Scissors', 'img/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Products('Baby Broom', 'img/sweep.png');
var tauntaun = new Products('Tauntaun Sleeping Bag');
var unicorn = new Products('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Products('Tentacle USB', 'img/usb.gif');
var waterCan = new Products('Watering Can', 'img/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'img/wine-glass.jpg');

//Pick a random number
var randNum = function () {
  return Math.floor(Math.random() * productImages.length);
};

function displayPics() {
  var leftIndex = randNum();
  var leftProduct = allProducts[pickLeft];
  pickLeft.src = pickLeftProduct.path;
  pickLeft.alt = pickLeftProduct.name;
  leftProduct.views += 1;

//pick a second picture for center and compare to left.
  var centerIndex = randNum();
//While they match, pick another
  while (centerIndex === leftIndex) {
    centerIndex = randNum();
    console.log(centerIndex + ': = centerIndex');
  }

  var centerProduct = allProducts[centerIndex];
  pickCenter.src = pickCenterProduct.path;
  pickCenter.alt = pickCenterProduct.name;
  centerProduct.views += 1;

//pick a third image for the right, compare to center image.
  var rightIndex = randNum();
//While they match, pick another
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randNum();
    console.log(centerIndex + ': = rightIndex');
  }

  var rightProduct = allProducts[rightIndex];
  pickRight.src = pickRightProduct.path;
  pickRight.alt = pickRightProduct.name;
  rightProduct.views += 1;

  previouslyShown = [leftIndex, centerIndex, rightIndex];
  console.log(previouslyShown + ': = previouslyShown');
}

function button() {
  if(totalClicks < productImages.length) {
    document.getElementById('resultsButton').style.visibility = 'hidden';
  } else {
    document.getElementById('resultsButton').style.visibility = 'visible';
  }
}
function hideSection() {
  if (totalClicks < productImages.length){
    document.getElementById('hide').style.display = 'block';
  } else {
    document.getElementById('hide').style.display = 'none';
  }
}

function thanksText(){
  if (totalClicks < productImages.length){
    document.getElementById('appear').style.display = 'none';
  } else {
    document.getElementById('appear').style.display = 'block';
  }
}

function legendText(){
  if (totalClicks < productImages.length){
    document.getElementById('legend').style.display = 'none';
  } else {
    document.getElementById('legend').style.display = 'block';
  }
}

function dataSet1() {
  for (var i = 0; i < productImages.length; i++) {
    clickCount[i] = productImages[i].clickTotal;
  }
}

function dataSet2() {
  for (var i = 0; i < productImages.length; i++){
    displayedCount[i] = productImages[i].timesDisplayed;
  }
}

function handleClick(image){
  image.clickTotal += 1;
  totalClicks += 1;
  hideSection();
  localStorage.setItem('chartPersist', JSON.stringify(productImages));
  button();
  thanksText();
  dataSet1();
  dataSet2();
  imageAppear();
  legendText();
}

pickLeft.addEventListener('click', function(){
  handleClick(productImages[pickLeft]);
});

pickCenter.addEventListener('click', function(){
  handleClick(productImages[pickCenter]);
});

pickRight.addEventListener('click', function(){
  handleClick(productImages[pickRight]);
});


displayPics();
button();
hideSection();
thanksText();
legendText();
