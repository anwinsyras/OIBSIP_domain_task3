function calculate(){
    let num = parseFloat(document.getElementById("num").value);
    //let c = parseFloat(document.getElementById("cel").value);
    const convert = document.getElementById("convert").value;
    if(convert === "cel"){
        let cel = (num-32) * 5/9;
        document.getElementById('display').textContent = "The Celsius temperature is " + cel.toFixed(3);
    }
    else{
       let Fahrenheit = (num * 1.8) + 32;
        document.getElementById('display').textContent = "The Farenhiet temperature is " + Fahrenheit.toFixed(3);
    }    
}