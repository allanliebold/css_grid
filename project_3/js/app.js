function eventListeners() {
  const ui = new UI();
}

// hide preloader
window.addEventListener('load', function() {
  document.querySelector('.preloader').style.display = 'none';
})

function UI() {
}

UI.prototype.hidePreloader = function() {
  document.querySelector('.preloader').style.display = 'none'; 
}
