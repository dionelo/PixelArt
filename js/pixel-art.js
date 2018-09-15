var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var pintando = false;
var indicadorDeColor = document.getElementById('indicador-de-color');
var pincel = 'lapiz';

function generarPaletaDeColores() {

  for (var i=0; i<nombreColores.length; i++) {
    var color = document.createElement('div');
    color.style.backgroundColor = nombreColores[i];
    color.classList.add('color-paleta');
    paleta.appendChild(color);
    color.addEventListener('click', seleccionDeColor);
  }

}

function generarGrilla() {

  for (var i=0; i<1750; i++) {
    var pixel = document.createElement('div');
    pixel.setAttribute('id', i); 
    grillaPixeles.appendChild(pixel);
    pixel.addEventListener('click', pintar);
    pixel.addEventListener('mousedown', function() {pintando = true});
    pixel.addEventListener('mouseup', function() {pintando = false});
    pixel.addEventListener('mousemove', pintarPixeles, false); 
  }

}

function pintar() {

  var pixelPintado = document.getElementById('indicador-de-color').style.backgroundColor;
  this.style.backgroundColor = pixelPintado;
  var id = this.getAttribute('id');
  id = parseInt(id, 10);
  var intervencion;

  if(pincel == 'balde') {
    intervencion = [1, 52, 53, 54, 55, 56, 106, 105, 153, 159, 157, 58, 372];
  } else if(pincel == 'espada') {
    intervencion = [53, 106, 158, 211, 264, 316, 369];
    pixelPintado = 'white'; 
  } 

  for(var i=0; i<intervencion.length; i++) {   
    document.getElementById(id + intervencion[i]).style.backgroundColor = pixelPintado;
    document.getElementById(id - intervencion[i]).style.backgroundColor = pixelPintado;
  }

}

function elegirPincel() {

  var lapiz = document.getElementById('lapiz');
  var balde = document.getElementById('balde');
  var espada = document.getElementById('espada');
  var grilla = document.getElementById('grilla-pixeles');
  var indicador = document.getElementById('indicador-de-color');

  lapiz.addEventListener('click', function() {
    pincel = 'lapiz';
    grilla.className = 'cursor-personalizado';
    indicador.className = 'cursor-personalizado';
  });

  balde.addEventListener('click', function() {
    pincel = 'balde';
    grilla.className = 'cursor-personalizado-balde';
    indicador.className = 'cursor-personalizado-balde';
  });

  espada.addEventListener('click', function() {
    pincel = 'espada';
    grilla.className = 'cursor-personalizado-espada';
    indicador.className = 'cursor-personalizado-espada';
    indicador.style.backgroundColor = 'white';
  });

}

function seleccionDeColor() {

  if(pincel != 'espada') {
    quitarSeleccion();
    this.className += ' seleccionado';
    var colorElegido = document.getElementsByClassName('seleccionado')[0].style.backgroundColor;
    indicadorDeColor.style.backgroundColor = colorElegido;
  }

}

function quitarSeleccion() {

  var selector= document.getElementsByClassName('color-paleta');

  for (var i=0; i<selector.length; i++) {
    selector[i].classList.remove('seleccionado');
  }

}

function pintarPixeles(e) {

  if(pintando) {
    var pixelPintado = document.getElementById('indicador-de-color').style.backgroundColor;
    e.target.style.backgroundColor = pixelPintado;
  }

}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
  })
)

generarPaletaDeColores();
generarGrilla();
elegirPincel();