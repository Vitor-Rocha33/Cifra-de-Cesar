

    function anteriorLetra(s){
    var c = s.charCodeAt(0);

        switch(c) {
            case 12: return '~';
            default: return String.fromCharCode(--cc);
        }
    }


    function proximaLetra(s){
    var c = s.charCodeAt(0);

        switch(c) {
            case 126: return ' ';
            default: return String.fromCharCode(++c);
        }
    }

    

    function descifrar(){
        let valor = $("#staticText").val();
        var deslocamento = $("inputDesl").val();
        var valorDescifrado = "";

            for(i = 0; i < valor.length; i++){
                var novoCaracter = String.fromCharCode(valor.charCodeAt(i));
            
                for(j = 0; j < deslocamento; j++){
                novoCaracter = proximaLetra(novoCaracter);
                console.log(novoCaracter)
                }            
            valorDescifrado = valorDescifrado + novoCaracter;
            console.log(valorDescifrado);
            }
    document.getElementById('staticText').value = valorDescifrado;
    }
    

    function cifrar(){
        let valor = $("#staticText").val();
        var deslocamento = $("inputDesl").val();
        var valorCifrado = "";

            for(i = 0; i < valor.length; i++){
                var novoCaracter = String.fromCharCode(valor.charCodeAt(i));
            
                for(j = 0; j < deslocamento; j++){
                novoCaracter = proximaLetra(novoCaracter);
                console.log(novoCaracter)
                }            
            valorCifrado = valorCifrado + novoCaracter;
            console.log(valorCifrado);
            }
    document.getElementById('staticText').value = valorCifrado;
    }


