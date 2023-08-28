document.querySelector(".btn-sub").addEventListener("click", agradecimento);

document.querySelector(".rating-section").addEventListener("click", realizada);

function agradecimento(){
  var cardRating = document.querySelector(".card-rating");
  var thanksCard = document.querySelector(".thanks-section");
  cardRating.style.display = "none";
  thanksCard.style.display = "block";
}

function realizada(event){
  var avaliacao = document.querySelector(".grade-selected");
  var evento = event.target;
  var notaSelecionada = evento.value;

  if(evento.tagName == "INPUT"){
    avaliacao.innerText = notaSelecionada;
    }; 
  };
