$(document).ready(function() {
  $('#borrar').click(function() {
    $('#grilla-pixeles').children().animate({'background-color': '#fff'}, 3000);
  })
  $('#guardar').click(function() {
    guardarPixelArt();
  })
  $('#batman').click(function() {
    cargarSuperheroe(batman);
  })
  $('#wonder').click(function() {
    cargarSuperheroe(wonder);
  })
  $('#flash').click(function() {
    cargarSuperheroe(flash);
  })
  $('#invisible').click(function() {
    cargarSuperheroe(invisible);
  })
})