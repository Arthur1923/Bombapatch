const carro = (function carro(){
   let tanque = 0 
   let velocidade = 0
    
    function acelerarCarro(velocidadekm) {
        return velocidade += velocidadekm;
    }
    function mostrarVelocidade(){
        console.log(velocidade)
    }


    return {
        acelerar(velocidadekm) {
            return acelerarCarro(velocidadekm);

        },
        velocidade(){
                return mostrarVelocidade();
        },
        abastecer(){
            return bombapatch(1);
        },
        frear(){
            return console.log(value);
        },
        cambio(){
            return console.log(value);
        }
    }
})();
carro.velocidade();
carro.acelerar(2);
carro.velocidade();

