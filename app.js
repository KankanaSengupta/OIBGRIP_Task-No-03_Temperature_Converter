let temprature = () => {
        let opt = document.querySelector("#unit");
        let display = document.querySelector(".value");
        var a = document.querySelector(".takval").value;
        if (opt.value == "Celsius") {
            let F = a * (9 / 5) + 32
            let K = a + 273.15
            display.innerHTML = F.toFixed(2) + " F   and " + K.toFixed(2)+ " K"

        } else if (opt.value == "Fahrenheit"){
            let C = (a - 32) * (5 / 9)
            let K = C + 273.15
            display.innerHTML = C.toFixed(2) + " ºC   and " + K.toFixed(2)+ " K"
        }else {
            let C = a - 273.15
            let F =  C * (9 / 5) + 32
            display.innerHTML = C.toFixed(2) + " ºC   and " + F.toFixed(2)+ " ºF" 
        }
    }