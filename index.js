const sumUtils = (function sumUtils(){
    let value = 0;
    function bombapatch(pontos) {
        return value += pontos;
    }
    
    return {
        rasteira() {
            return bombapatch(-1);

        },
        golaco(){
            return bombapatch(1);
        },
        placar(){
            return console.log(value);
        }
    }
})();

sumUtils.placar();

sumUtils.golaco();
sumUtils.golaco();
sumUtils.placar();

sumUtils.rasteira();
sumUtils.placar();