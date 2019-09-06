
    function previousLetter(s){
    var c = s.charCodeAt(0);

        switch(c) {
            case 12: return '~';
            default: return String.fromCharCode(--c);
        }
    }


    function nextLetter(s){
    var c = s.charCodeAt(0);

        switch(c) {
            case 126: return ' ';
            default: return String.fromCharCode(++c);
        }
    }

    function decrypt(){
        var value = $("#staticText").val();
        var displacement = $("#inputDisplacement").val();
        var valueDecrypted = "";

        for (i = 0; i < value.length; i++){
            var newLetter = String.fromCharCode(value.charCodeAt(i));

            for (a = 0; a < displacement; a++){                
                newLetter = previousLetter(newLetter);
            }

            valueDecrypted = valueDecrypted + newLetter;
        }

        document.getElementById('staticText').value = valueDecrypted;

    }

    function encrypt(){
    var value = $("#staticText").val();
    var displacement = $("#inputDisplacement").val();
    var valueEncrypted = '';

    for (i = 0; i < value.length; i++){
        let newLetter = String.fromCharCode(value.charCodeAt(i));

        for(a = 0; a < displacement; a++){
            newLetter = nextLetter(newLetter);
        }

        valueEncrypted = valueEncrypted + newLetter;

    }

    document.getElementById('staticText').value = valueEncrypted;
    
    }


