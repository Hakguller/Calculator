function operation(number) {
    document.forms[0].text.value = document.forms[0].text.value + number;
    }
    function equal(){
        let esittir = document.forms[0].text.value;
        if(esittir){
            document.forms[0].text.value = eval(esittir);
        }
    }
    function clearAll(){
        document.forms[0].text.value = ""
    }

    function back(){
        document.forms[0].text.value = document.forms[0].text.value.substring(0, document.forms[0].text.value.length -1)
    }