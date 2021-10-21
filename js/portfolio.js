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

    document.getElementById('portfolio-item__info').innerHTML +=
      '<p>' + item.info + '</p>';

    document.querySelector('.portfolio-item__links').innerHTML += getLinks(
      item.link
    );
  })
  .catch((error) => console.log(error));

const getLinks = (links) => {
  let result = '';
  links.forEach((link) => {
    result +=
      '<a href="' +
      link.url +
      '"><i class="' +
      link.type +
      '"></i> ' +
      link.message +
      '</a>';
  });
  return result;
};
