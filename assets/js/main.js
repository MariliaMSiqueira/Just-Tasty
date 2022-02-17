// INICIANDO JQUERY
// var ProgressBar = require('progressbar.js')

$(document).ready(function () {
  // PROGRESS BAR
  // STROKE = LARGURA DO CÍRCULO

  // CLIENTES SATISFEITOS
  let containerA = document.getElementById('circleA');

  let circleA = new ProgressBar.Circle(containerA, {
    color: '#ffff00',
    strokeWidth: 8,
    duration: 3500,
    from: { color: '#ff0000' },
    to: { color: '#fff' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 16856);

      circle.setText(value);
    }
  });

  // PRATOS DISPONÍVEIS
  let containerB = document.getElementById('circleB');

  let circleB = new ProgressBar.Circle(containerB, {
    color: '#ffff00',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#ff0000' },
    to: { color: '#fff' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 43)

      circle.setText(value);
    }
  });

  // SABORES DE PIZZA
  let containerC = document.getElementById('circleC');

  let circleC = new ProgressBar.Circle(containerC, {
    color: '#ffff00',
    strokeWidth: 8,
    duration: 1800,
    from: { color: '#ff0000' },
    to: { color: '#fff' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 21)

      circle.setText(value);
    }
  });

  // OPÇÕES DE HAMBURGUER
  let containerD = document.getElementById('circleD');

  let circleD = new ProgressBar.Circle(containerD, {
    color: '#ffff00',
    strokeWidth: 8,
    duration: 1000,
    from: { color: '#ff0000' },
    to: { color: '#fff' },

    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 8)

      circle.setText(value);
    }
  });


  //LOADER COM SCROL ---- PROBLEMA AQUI ==============================

  let dataAreaOffset = $('#data-area').offset();
  let stop = 0; // CONTROLAR REPETIÇÃO

  $(window).scroll(function(e){
    // POSIÇÃO DO ATUAL SCROLL
    let scroll = $(window).scrollTop();
    // SE SCROLL > POSIÇÃO DATA AREA.TOP FOR DE -500PX E STOP FOR 1 = ANIMA
    if(scroll > (dataAreaOffset.top - 500) && stop == 0){

      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }

  });

  // EFEITO PARALLAX
  //  CARREGAR TODAS AS IMAGENS EVITAR BUGS
  setTimeout(function(){
    $('#data-area').parallax({imageSrc:'../../assets/imgs/parallax/vegetables.parallax.jpg'});
    $('#apply-area').parallax({imageSrc:'../../assets/imgs/parallax/BG.png'})
  }, 250);

  // FILTER PRODUCTS
  // EVENTO DE CLIQUE DO BOTÃO ACIONA A FUNÇÃO PARA PEGAR O ATRIBUTO ID E IDENTIFICAR AS BOXES QUE POSSUEM A CLASS PRODUCT-BOX
  $('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.product-box');

    // ADICIONA/REMOVE O ACTIVE DA CLASS
    // INICIA PÁGINA COM ACTIVE DEFAULT EM ALL
    // ACIONANDO O EVENTO ONCLICK DO BTN, O ACTIVE SERÁ REMOVIDO E SERÁ ADICIONADO ACTIVE NO BTN CLICADO
    $('.main-btn').removeClass('active');
    $(this).addClass('active');
    
    // PASSAR PARÂMETRO BOXES PARA CORRESPONDER A FUNCTION GETBOXES
    if(type =='sal-btn'){
      getBoxes('sal', boxes);
    } else if(type == 'candy-btn'){
      getBoxes('candy', boxes);
    } else if (type == 'fit-btn'){
      getBoxes('fit', boxes);
    }else {
      getBoxes('all', boxes);
    }
  });

  //fade() MÉTODO JQUERY PARA MOSTRAR/ESCONDER OS ITENS SELECIONADOS
  // SE NÃO, IRÁ ITERAR TODOS OS BTN COM SUAS RESPECTIVAS CONDIÇÕES
  function getBoxes(type, boxes){
    // SE O ID FOR DO TIPO ALL = MOSTRA TODOS OS ITEMS DO FADE
    // SE NÃO, IRÁ ITERAR CADA ITEM INVOCANDO UM FUNÇÃO
    // FUNÇÃO PARA IDENFICAR SE O ID CORRESPONDE A SUA CLASSE (FADEIN OU FADEOUT)
    if(type =='all'){
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function(){
      if(!$(this).hasClass(type)){
        $(this).fadeOut('slow');
      } else{
        $(this).fadeIn();
      }

      });
    }
  }

});





