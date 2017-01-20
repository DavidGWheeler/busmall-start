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
var thankYou = document.getElementById('popIn');
console.log(thankYou);
var resultShow = document.getElementById('resultShow');
var imageSection = document.getElementById('popOut');
console.log(imageSection);
var wipeLS = document.getElementById('lSWipe');
var chartData = localStorage.getItem('chartPersist');
var previouslyShown = [];

function Products(name, path) {
  this.name = name;
  this.path = path;
  this.totalClicks = 0;
  this.displayedCount = 0;
  productImages.push(this);
  console.log(this);
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
var tauntaun = new Products('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
var unicorn = new Products('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Products('Tentacle USB', 'img/usb.gif');
var waterCan = new Products('Watering Can', 'img/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'img/wine-glass.jpg');

//Pick a random number
var randNum = function() {
  return Math.floor(Math.random() * productImages.length);
};

function displayPics() {
  pickLeft = randNum();
  while (pickLeft === previouslyShown.includes(pickLeft)) {
    pickLeft = randNum();
    console.log(pickLeft);
  }
  var leftProduct = productImages[pickLeft];
  pickLeftProduct.src = leftProduct.path;
  pickLeftProduct.alt = leftProduct.name;
  leftProduct.views += 1;
  leftProduct.displayedCount += 1;
  console.log(leftProduct.views);

//pick a second picture for center and compare to left.
  pickCenter = randNum();
//While they match, pick another
  while (pickCenter === pickLeft || previouslyShown.includes(pickCenter)) {
    pickCenter = randNum();
    console.log(pickCenter + ': = pickCenter');
  }

  var centerProduct = productImages[pickCenter];
  pickCenterProduct.src = centerProduct.path;
  pickCenterProduct.alt = centerProduct.name;
  centerProduct.views += 1;
  centerProduct.displayedCount += 1;
  console.log(centerProduct.views);

//pick a third image for the right, compare to center image.
  pickRight = randNum();
//While they match, pick another
  while (pickRight === pickLeft || pickRight === pickCenter || previouslyShown.includes(pickRight)) {
    pickRight = randNum();
    console.log(pickRight + ': = pickRight');
  }

  var rightProduct = productImages[pickRight];
  pickRightProduct.src = rightProduct.path;
  pickRightProduct.alt = rightProduct.name;
  rightProduct.views += 1;
  rightProduct.displayedCount += 1;
  console.log(rightProduct.views);

  previouslyShown = [pickLeft, pickCenter, pickRight];
  console.log(previouslyShown + ': = previouslyShown');
}

function button() {
  if (totalClicks < productImages.length) {
    document.getElementById('resultShow').style.visibility = 'hidden';
  } else {
    document.getElementById('resultShow').style.visibility = 'visible';
  }
}
function hideSection() {
  if (totalClicks < productImages.length){
    document.getElementById('popOut').style.display = 'block';
  } else {
    document.getElementById('popOut').style.display = 'none';
  }
}

function thanksText(){
  if (totalClicks < productImages.length){
    document.getElementById('popIn').style.display = 'none';
  } else {
    document.getElementById('popIn').style.display = 'block';
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

function chartMake() {
  var data = {
    labels : ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dogDuck', 'dragon', 'pen', 'pawBroom', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'],
    datasets : [
      {
        label: 'Product Selected Chart',
        fillColor : '#152874',
        strokeColor : '#48A4D1',
        data : productImages.clickTotal
      },
      {
        label: 'All Appearances',
        fillColor : '#cbb910',
        strokeColor : '#48A4D1',
        data : productImages.displayedCount
      }
    ]};
};

var chartLoc = document.getElementById('chartLoc').getContext('2d');

var myBarChart = new Chart(chartLoc, {
  type: 'bar',
  data: chartMake(),
  options: {
    responsive: false
  }
});


function handleClick(image){
  image.clickTotal += 1;
  totalClicks += 1;
  hideSection();
  localStorage.setItem('chartPersist', JSON.stringify(productImages));
  button();
  thanksText();
  dataSet1();
  dataSet2();
  displayPics();
  legendText();
}

if(chartData) {
  productImages = JSON.parse(chartData);
} else {
  localStorage.setItem('chartPersist', JSON.stringify(productImages));
}

function handleButtonClick(){
  chartMake();
  console.log('chart make click was heard');
}

var handleLSWipe = function() {
  console.log('Clear Local Storage Initiated');
  localStorage.clear();
};


pickLeftProduct.addEventListener('click', function(){
  handleClick(productImages[pickLeft]);
});

pickCenterProduct.addEventListener('click', function(){
  handleClick(productImages[pickCenter]);
});

pickRightProduct.addEventListener('click', function(){
  handleClick(productImages[pickRight]);
});

resultShow.addEventListener('click', handleButtonClick);
wipeLS.addEventListener('click', handleLSWipe);


displayPics();
button();
hideSection();
thanksText();
legendText();
