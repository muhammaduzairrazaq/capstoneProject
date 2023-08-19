const toggleBtn = document.getElementById('toggleBtn');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});