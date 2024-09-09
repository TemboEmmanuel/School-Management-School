const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
});
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.classList.add('hide');
  } else {
    video.pause();
    playButton.classList.remove('hide');
  }
});

video.addEventListener('play', function() {
  playButton.classList.add('hide');
});

video.addEventListener('pause', function() {
  playButton.classList.remove('hide');
});
document.getElementById('myVideo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });


  

