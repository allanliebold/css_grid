eventListeners();

function eventListeners() {
  const ui = new UI();

  // hide preloader
  window.addEventListener('load', function() {
    ui.hidePreloader();
  })
  
  // toggle nav bar
  document.querySelector('.navBtn').addEventListener('click', function() {
    ui.showNav();
  })
}

function UI() {
}

UI.prototype.hidePreloader = () => document.querySelector('.preloader').style.display = 'none'; 

UI.prototype.showNav = function() {
  document.querySelector('nav').classList.toggle('nav--show'); 
}

