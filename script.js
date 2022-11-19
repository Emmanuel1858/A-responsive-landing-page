const toggle = document.getElementById('toggle')
const closes = document.getElementById('close')
const opens = document.getElementById('open')
const modal = document.getElementById('modal')

// Toggle nav 
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

opens.addEventListener('click', () => 
document.modal.classList.add('show-modal'));

closes.addEventListener('click', () => modal.classList.remove('show-modal'));

