let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.wrapper');

const end = () => {
    isDown = false;
   
}


const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
    

}

(() => {    
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('mousemove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
})();








var searchImg = document.querySelector('.search-img')
var searchBox = document.querySelector('.search-box');
var searchInput = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', function() {
  searchBox.classList.toggle('expanded');
  searchInput.classList.toggle('expanded');
  searchBtn.classList.toggle('expanded');
  searchImg.classList.toggle('expanded')
});


const langButtons = document.querySelectorAll('.lang');

langButtons.forEach(a => {
  a.addEventListener('click', function() {
    langButtons.forEach(btn => btn.classList.remove('clicked'));
    a.classList.add('clicked');
  });
});


