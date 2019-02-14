function eventListeners() {
  const ui = new UI();
}

// hide preloader
window.addEventListener('load', function() {
  ui.hidePreloader();
})

function UI() {
}

UI.prototype.hidePreloader = function() {
  document.querySelector('.preloader').style.display = 'none'; 
}
