document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const button = document.getElementById('submitBtn');
  button.classList.add('loading');
  button.disabled = true;
});
