var myModal = document.getElementById('newton-modal');
var myInput = document.getElementById('open-modal');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});
