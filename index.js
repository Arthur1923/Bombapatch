const carro = (function carro(){
   let tanque = 0 
   let velocidade = 0
   let marcha = 0
    
    function acelerarCarro(velocidadekm) {
        return velocidade += velocidadekm;
    }
    function mostrarVelocidade(){
        console.log(velocidade)
    }

    function abastecercarro (abastecercarro){
        return tanque += abastecercarro;
    }
    function mostrartanque(){
        console.log(tanque)
    
    }
    
    function mudarmarcha (mudarmarcha){
        return marcha += mudarmarcha;
    }
    function mostrarmarcha(){
        console.log('sua marcha é:' + marcha);
    }
    function frearcarro(frearcarro){
       velocidade -= frearcarro;
       console.log('freando o carro. Diminuindo ' + frearcarro + 'km')
    }
  
    
    return {
        acelerar(velocidadekm) {
            console.log("Sua velocidade é: " + acelerarCarro(velocidadekm));
        },
        velocidade(){
            return mostrarVelocidade();
        },
        abastecer(valorabastecido){
            return abastecercarro(valorabastecido);
        },
        frear(frear){
            frearcarro(frear);
        },
        tanque(){
            return mostrartanque();
        },
        mudarmarcha(){
            mudarmarcha(1);
            mostrarmarcha();
        },
        mostrarmarcha() {
            mostrarmarcha();
        }
    }
})();
carro.velocidade();
carro.acelerar(45);
carro.abastecer(3);
carro.tanque();
carro.mudarmarcha(5);
carro.frear(3);
carro.acelerar(0);
carro.mostrarmarcha();


