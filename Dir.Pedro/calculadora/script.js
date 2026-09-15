const visor = document.querySelector('.visor');
const botoes = document.querySelectorAll('button');

let primeiroNumero = '';
let segundoNumero = '';
let operador = '';

botoes.forEach((botao) => {

    botao.addEventListener('click', () => {

        const valor = botao.textContent;

        if (!isNaN(valor)) {

            if (operador === '') {
                primeiroNumero += valor;
            } else {
                segundoNumero += valor;
            }

        }

        if (
            valor === '+' ||
            valor === '-' ||
            valor === '*' ||
            valor === '/'
        ) {
            operador = valor;
        }

        if (valor === '=') {

            const numero1 = Number(primeiroNumero);
            const numero2 = Number(segundoNumero);

            let resultado;

            switch (operador) {
                case '+':
                    resultado = numero1 + numero2;
                    break;

                case '-':
                    resultado = numero1 - numero2;
                    break;

                case '*':
                    resultado = numero1 * numero2;
                    break;

                case '/':
                    resultado = numero1 / numero2;
                    break;

            }

            visor.textContent = resultado;

        }

        if (valor === 'C') {

            primeiroNumero = '';
            segundoNumero = '';
            operador = '';

            visor.textContent = '0';

            return;
        }

        if (valor !== '=' && valor !== 'C') {

            visor.textContent =
                primeiroNumero +
                operador +
                segundoNumero;
        }

    });

});