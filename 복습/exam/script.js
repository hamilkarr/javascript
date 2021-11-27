window.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('button');
  const type = button.getAttribute('type');
  const id = button.getAttribute('id');
  const value = button.getAttribute('value');

  console.log(value);

  button.setAttribute('price', 2000);
});
