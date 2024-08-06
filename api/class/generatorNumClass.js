class generatorData {
        static cardNumber () {
            const generatorRandomDigit = () => Math.floor(Math.random() * 9);

            let digitos = '';
            for (let i = 0;  i < 16; i++) {
                digitos += generatorRandomDigit ()
            }
            return digitos;
        }

        static cvvCard () {
            return Math.floor(Math.random() * (999 - 100 + 1))+ 100;
        }

        //Este ultimo trate de hacerlo por mi cuenta, tome de base un tutorial pero termine utilizando ia para hacerlo funcionar :(
        static expirationDate () {
            const actualDate = new Date();
            actualDate.setFullYear(actualDate.getFullYear()+3);

            const formato = new Intl.DateTimeFormat('en-CA');
            const actualDat = new Date();
            return formato.format(actualDat);

        }
}

console.log (generatorData.cardNumber())
console.log (generatorData.cvvCard())
console.log (generatorData.expirationDate())