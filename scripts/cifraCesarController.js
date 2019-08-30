class cifraDeCesar {

    anteriorLetra(){
    var c = s.charCodeAt(0);

        switch(c) {
            case 12: return '~';
            default: return String.fromCharCode(-cc);
        }
    }


    proximaLetra(){
    var c = s.charCodeAt(0);

        switch(c) {
            case 126: return ' ';
            default: return String.fromCharCode(++c);
        }
    }

    



    cifrar(){
    let valor = document.getElementById('staticText');
    let deslocamento = document.getElementById('inputDesl');
    let valorCifrado;

        for(i = 0;i < valor.length; i++){
            novoCaracter = String.fromCharCode(valor.charCodeAt(i));
            for(a = 0; j < deslocamento; j ++){
                novoCaracter = this.proximaLetra(novoCaracter);
            }
            valorCifrado = valorCifrado + novoCaracter;
        }
        document.getElementById('staticText').value = valorCifrado;
    }

}
