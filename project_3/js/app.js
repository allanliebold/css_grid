eventListeners();

function eventListeners() {
  const ui = new UI();

  // hide preloader
  window.addEventListener('load', () => ui.hidePreloader());
  
  // toggle nav bar
  document.querySelector('.navBtn').addEventListener('click', () => ui.showNav());

  // video controls
  document.querySelector('.video__switch').addEventListener('click', () => ui.videoControls());
  
} 
  
function UI() {};

UI.prototype.hidePreloader = () => document.querySelector('.preloader').style.display = 'none'; 
UI.prototype.showNav = function() => document.querySelector('nav').classList.toggle('nav--show'); 
UI.prototype.videoControls = () => {
  let btn = document.querySelector('.video__switch-btn');
  let video = document.querySelector('.video__item');
  
  btn.classList.contains('btnSlide') ? video.play() : video.pause();
  btn.classList.toggle('btnSlide');
}
UI.prototype.checkEmpty = (firstName, lastName, email) => !(firstName === '' || lastName == '' || email === '');
