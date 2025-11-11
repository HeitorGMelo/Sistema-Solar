//Puxa a lista de planetas através da classe
const planets = document.querySelectorAll(".planeta"); 
//Cria uma let para saber se está pausado para pode controlar a animação
let isPaused = false;
let isNormal = true;
let isReverse = false;

//Cria e adiciona as ações do botão esquerdo(Voltar)
const leftButton = document.getElementById('leftButton')

leftButton.addEventListener("click", function(voltar){
    if(isNormal == true || isPaused == true){
        planets.forEach(planeta =>{
        planeta.style.animationDirection = "reverse";
        planeta.style.animationPlayState = "running";
        });
        isPaused = false;
        isNormal = false;
        isReverse = true; 
    } 
}) 

//Cria e adiciona as ações do botão do meio(pause)
const pauseButton = document.getElementById('pauseButton')

pauseButton.addEventListener("click", function(pause){
    if(isNormal == true || isReverse == true){
            planets.forEach(planeta => {
            planeta.style.animationPlayState = "paused";
        });
        isPaused = true;
        isNormal = false;
        isReverse = false;
    } else{
            planets.forEach(planeta => {
            planeta.style.animationPlayState = "running";
        });
        isPaused = false;
        isNormal = true;
        isReverse = true;
    }
})

//Cria e adiciona as ações do botão direito(seguir)
const rightButton = document.getElementById('rightButton')

rightButton.addEventListener("click", function(continuar){
    if(isPaused == true || isReverse == true){
            planets.forEach(planeta =>{
            planeta.style.animationDirection ="normal";
            planeta.style.animationPlayState = "running";
        });
        isPaused = false;
        isNormal = true;
        isReverse = false;
    }
});

