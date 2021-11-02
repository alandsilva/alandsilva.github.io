const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

fetch('../data/data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((item, index) => {
      document.getElementById('portfolio').innerHTML += getPortfolioItem(
        item,
        index
      );
    });
  })
  .catch((error) => console.log(error));

const getPortfolioItem = (item, index) => {
  return (
    '<a href="portfolio-item.html?item=' +
    index +
    '" class="portfolio__item"><img src="img/' +
    item.image +
    '" alt="" class="portfolio__img" /> <div class="portfolio__info"><h2 class="portfolio__name">' +
    item.name +
    '</h2><div class="portfolio__icons">' +
    '</div></div></a>'
  );
};
