var canvas = document.getElementById("villaplatzi");
var contextoCanvas = canvas.getContext("2d");

var fondo = {
  URL: "tile.png",
  cargaOk: false,
};

var vaca = {
  URL: "vaca.png",
  cargaOk: false,
};

var pollo = {
  URL: "pollo.png",
  cargaOk: false,
};

var cerdo = {
  URL: "cerdo.png",
  cargaOk: false,
};

var perro = {
  URL: "perro.png",
  cargaOk: false,
};

var teclas = {
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
};

var movimiento = 10;
var x = 420;
var y = 420;

document.addEventListener("keyup", moverPerro);

var xPerro = 0;
var yPerro = 0;



function moverPerro(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      yPerro = yPerro - movimiento;
      if (yPerro < -40) {
        yPerro = 500;
      }
      break;
    case teclas.DOWN:
      yPerro = yPerro + movimiento;
      if (yPerro > 500) {
        yPerro = 0;
      }
      break;
    case teclas.LEFT:
      xPerro = xPerro - movimiento;
      if (xPerro < -40) {
        xPerro = 500;
      }
      break;
    case teclas.RIGHT:
      xPerro = xPerro + movimiento;
      if (xPerro > 500) {
        xPerro = 0;
      }
      break;
    default:
  }
  dibujar(true);
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.URL;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.URL;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.URL;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.URL;
cerdo.imagen.addEventListener("load", cargarCerdo);

perro.imagen = new Image();
perro.imagen.src = perro.URL;
perro.imagen.addEventListener("load", cargarPerro);

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOk = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPerro() {
  perro.cargaOk = true;
  dibujar();
}

function clearDraw(){
  contextoCanvas.clearRect(0,0,canvas.width,canvas.height)
}

function dibujar(estaMoviendo) {
    clearDraw()

    if ((fondo.cargaOk = true)) {
      contextoCanvas.drawImage(fondo.imagen, 0, 0);
    }
    if ((vaca.cargaOk = true)) {
      var cantidad = aleatorio(1, 10);
      for (var v = 0; v < cantidad; v++) {
        if(estaMoviendo) {
          contextoCanvas.drawImage(vaca.imagen, x, y);
        } else {
          var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        contextoCanvas.drawImage(vaca.imagen, x, y);
        }

      }
    }
    if ((pollo.cargaOk = true)) {
      var cantidad = aleatorio(1, 10);
      for (var v = 0; v < cantidad; v++) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        contextoCanvas.drawImage(pollo.imagen, x, y);
      }
    }
    if ((cerdo.cargaOk = true)) {
      var cantidad = aleatorio(1, 10);
      for (var v = 0; v < cantidad; v++) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        contextoCanvas.drawImage(cerdo.imagen, x, y);
      }
    }
    if ((perro.cargaOk = true)) {
      contextoCanvas.drawImage(perro.imagen, xPerro, yPerro);
    }
  }

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
