var card = document.querySelector('.card');
if (card !== undefined && card !== null) {
  card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
 }
});
