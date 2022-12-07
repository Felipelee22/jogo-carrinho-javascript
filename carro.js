//código do carro
let xCarros = [600, 600, 600]
let yCarros = [40, 96, 155];
let velocidadeCarros = [2, 2.5, 3.2];
let comprimentoCarro = 50;
let alturaCarro = 30;

//variáveis do carro 1
let xCarro = 600;

//variáveis do carro 2
let xCarro2 = 600;

//variáveis do carro 3
let xCarro3 = 600;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
  }

function movimentaCarro(){
  for (let i = 0; i< imagemCarros.length; i = i + 1){    
  xCarros[i] -= velocidadeCarros[i]; 
  }
  }

function voltaPosiçãoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  if (passouTodaATela(xCarros[i])) {
    xCarros[0] = 600
  }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50
}