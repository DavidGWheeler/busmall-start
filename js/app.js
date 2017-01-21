'use strict';

var productImages = [];
var clickCount = [];
var views = [];
var totalClicks = 0;
var pickLeft;
var pickCenter;
var pickRight;
var pickLeftProduct = document.getElementById('pickLeft');
var pickCenterProduct = document.getElementById('pickCenter');
var pickRightProduct = document.getElementById('pickRight');
var thankYou = document.getElementById('popIn');
console.log(thankYou);
var imageSection = document.getElementById('popOut');
console.log(imageSection);
var chartData = localStorage.getItem('chartPersist');
var previouslyShown = [];

function Products(name, path) {
  this.name = name;
  this.path = path;
  this.clickTotal = 0;
  this.views = 0;
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
    console.log(pickLeft + 'pickLeft');
  }
  var leftProduct = productImages[pickLeft];
  pickLeftProduct.src = leftProduct.path;
  pickLeftProduct.alt = leftProduct.name;
  leftProduct.views += 1;
  console.log(productImages[pickLeft].views + 'views of left');

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
  console.log(productImages[pickCenter].views + ' center click');

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
  console.log(productImages[pickLeft].views + ' left click');

  previouslyShown = [pickLeft, pickCenter, pickRight];
  console.log(previouslyShown + ': = previouslyShown');
}

function hideSection() {
  if (totalClicks < 25){
    document.getElementById('popOut').style.display = 'block';
  } else {
    document.getElementById('popOut').style.display = 'none';
  }
}

function hideChart() {
  if (totalClicks < 25){
    document.getElementById('myChart').style.display = 'hidden';
  } else {
    document.getElementById('myChart').style.display = 'visible';
  }
}

function thanksText(){
  if (totalClicks < 25){
    document.getElementById('popIn').style.display = 'none';
  } else {
    document.getElementById('popIn').style.display = 'block';
  }
}

//hide or reveal the area for my list
function legendText(){
  if (totalClicks < 25){
    document.getElementById('legend').style.display = 'none';
  } else {
    document.getElementById('legend').style.display = 'block';
  }
}

function dataSet1() {
  for (var i = 0; i < productImages.length; i++) {
    clickCount[i] = productImages[i].clickTotal;
    console.log(clickCount[i] + ' = dataSet1');
  }
}

function dataSet2() {
  for (var i = 0; i < productImages.length; i++){
    views[i] = productImages[i].views;
    console.log(views[i] + ' = dataSet2');
  }
}

//I think this is implemented per chartJS documentation
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels : ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dogDuck', 'dragon', 'pen', 'pawBroom', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'],
    datasets : [
      {
        label: 'Product Selected Chart',
        backgroundColor : [
          '#152874',/*bag*/
          '#3a5787',/*banana*/
          '#a7b7d1',/*bathroom*/
          '#5f6672',/*boots*/
          '#19263d',/*breakfast*/
          '#a399fc',/*bubblegum*/
          '#0d073f',/*chair*/
          '#bae4fc',/*cthulu*/
          '#677d89',/*dogDuck*/
          '#2c96d3',/*dragon*/
          '#179168',/*pen*/
          '#0c3f2e',/*pawBroom*/
          '#4d3e8e',/*scissors*/
          '#170666',/*shark*/
          '#723396',/*tauntaun*/
          '#2e143d',/*unicorn*/
          '#c09ad6',/*usb*/
          '#9b31d8',/*waterCan*/
          '#36514a',/*wineglass*/
        ],
        borderColor : '#48A4D1',
        data : clickCount
      },
      {
        label: 'All Appearances',
        backgroundColor : '#48A4D1',
        borderColor: '#152874',
        data : views
      }
    ]}
});

//when an image gets a click this all happens
function handleClick(image){
  image.clickTotal += 1;
  console.log(image.clickTotal + ' click total incremented');
  totalClicks += 1;
  hideSection();
  localStorage.setItem('chartPersist', JSON.stringify(productImages));
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

//image click event listeners
pickLeftProduct.addEventListener('click', function(){
  handleClick(productImages[pickLeft]);
});

pickCenterProduct.addEventListener('click', function(){
  handleClick(productImages[pickCenter]);
});

pickRightProduct.addEventListener('click', function(){
  handleClick(productImages[pickRight]);
});


//call functions
displayPics();
hideSection();
hideChart();
thanksText();
legendText();
