eventListeners();

function eventListeners() {
  const ui = new UI();

  // hide preloader
  window.addEventListener('load', () => ui.hidePreloader());
  
  // toggle nav bar
  document.querySelector('.navBtn').addEventListener('click', () => ui.showNav());

  // video controls
  document.querySelector('.video__switch').addEventListener('click', () => ui.videoControls());
  
  document.querySelector('.drink-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value; 
    
    let value = ui.checkEmpty(firstName, lastName, email);
    let alertText, alertType;
    
    if(value) {
      let customer = new Customer(firstName, lastName, email);
    } else {
      
    }
  })
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
UI.prototype.showFeedback = (text, type) => {
  let feedback = document.querySelector('.drink-form__feedback'); 
  feedback.classList.add(type);
  feedback.innerText = text; 
}
