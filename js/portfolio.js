// Getting the item name
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('item');
console.log(index);

fetch('../data/data.json')
  .then((response) => response.json())
  .then((data) => {
    item = data[index];
    document.getElementById('title').innerHTML = item.name;
    document.getElementById('description').innerHTML = item.description;
    document.getElementById('img').src = './img/' + item.image;

    document.querySelector('.portfolio-item__links').innerHTML += getLinks(
      item.link
    );

    document.querySelector('.details').innerHTML += getImages(item.images);
    document.querySelector('.stack').innerHTML += getStack(item.stack);
  })
  .catch((error) => console.log(error));

const getLinks = (links) => {
  let result = '';
  links.forEach((link) => {
    result +=
      '<a class="btn" href="' +
      link.url +
      '" target="_blank"><i class="' +
      link.type +
      '"></i> ' +
      link.message +
      '</a>';
  });
  return result;
};

const getStack = (stack) => {
  let result = '';
  stack.forEach((item) => {
    result += ' -' + item + '- ';
  });

  return result;
};

const getImages = (images) => {
  let result = '';
  images.forEach((image, index) => {
    let pos1 = index % 2 == 0 ? 'first' : 'last';
    let pos2 = index % 2 == 0 ? 'last' : 'first';
    const newImage =
      '<div class="details-item"><div class="item ' +
      pos1 +
      '"><img src="img/' +
      image.image +
      '" alt="detail image" /></div><div class="item ' +
      pos2 +
      '">' +
      image.description +
      '</div></div>';
    result += newImage;
  });
  return result;
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
  console.log('scrolling...');
};

// Get the header
var links = document.querySelector('.portfolio-item__links');

// Get the offset position of the navbar
var sticky = links.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    links.classList.add('sticky');
  } else {
    links.classList.remove('sticky');
  }
}
