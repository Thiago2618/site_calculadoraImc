function meuEscopo () {
    const form = document.querySelector(".form");

    function recebeFormulario (evento) {
        
        evento.preventDefault();

        const altura = form.querySelector(".altura");
        const peso = form.querySelector(".peso");

        let numPeso = parseFloat(peso.value);
        let numAltura = parseFloat(altura.value);

        const resultado = (numPeso / (numAltura * numAltura));
        const imcValor = resultado.toFixed(1);

        console.log(imcValor);
        
        function niveis(imcValor) {
            if (imcValor < 17) {
                return 'Muito abaixo do peso'
            }
            if (imcValor > 17 && imcValor <= 18.49) {
                return 'Abaixo do peso'
            }
            if (imcValor > 18.5 && imcValor <= 24.99) {
                return 'Peso Normal'
            }
            if (imcValor > 25 && imcValor <= 29.99) {
                return 'Acima do Peso'
            }
            if (imcValor > 30 && imcValor <= 34.99) {
                return 'Obesidade I'
            }
            if (imcValor > 35 && imcValor <= 39.99) {
                return 'Obesidade II'
            }
            if (imcValor > 40) {
                return 'Obesidade III'
            }
            
        }


        const resultadoImc = document.querySelector(".valorImc")
        resultadoImc.innerHTML = `Seu IMC é ${imcValor} <br> ${niveis(imcValor)}`;

    }

    


    form.addEventListener ('submit', recebeFormulario);
}

meuEscopo();