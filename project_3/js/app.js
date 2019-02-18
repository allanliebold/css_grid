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
      ui.addCustomer(customer);
      alertText = 'customer added';
      alertType = 'success';
      ui.clearFields();
    } else {
      alertText = 'please fill in all info';
      alertType = 'error';
    }
    
    ui.showFeedback(alertText, alertType);
    ui.removeAlert(alertType);
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
UI.prototype.removeAlert = (type) => {
  setTimeout(() => {
    document.querySelector('.drink-form__feedback').classList.remove(type);
  }, 3000);
}
UI.prototype.addCustomer = (customer) => {
  const images = [1,2,3,4,5];
  let random = Math.floor(Math.random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<img src="img/person-${random}.jpeg" alt="person" class="person__thumbnail">
                   <h4 class="person__name">${customer.name}</h4>
                   <h4 class="person__last-name">${customer.lastName}</h4>`;
  document.querySelector('.drink-card__list').appendChild(div);
}
UI.prototype.clearFields = () => {
  document.querySelector('.input-name').value = '';
  document.querySelector('.input-lastname').value = '';
  document.querySelector('.input-email').value = '';
}
UI.prototype.showModal = (event) => {
  event.preventDefault();
  if(event.target.parentElement.classList.contains('work-item__icon')) {
    let id = event.target.parentElement.dataset.id;
    const modal = document.querySelector('.work-modal');
    const modalItem = document.querySelector('.work-modal__item');
    modal.classList.add('work-modal--show');
    modalItem.style.backgroundImage = `url(img/work-${id}.jpeg)`;
  } 
}
UI.prototype.closeModal = () => {
  document.querySelector('.work-modal').classList.remove('work-modal--show');  
}
