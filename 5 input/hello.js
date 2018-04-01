document.getElementById("submit").addEventListener("click", function(){
    var fruit = document.getElementById("fruit").value;
    var result = document.getElementById("result");
     var name = document.getElementById("name");
     var myinput = document.getElementsByTagName("input");

    if (fruit.toLowerCase() == "orange") {
        result.innerHTML = name.value + "," + " " + "you are friendly!"
    }
    else if (fruit.toLowerCase() == "apple"){
        result.innerHTML = name.value + "," + " " + "You are polite!"
    }
      else if (fruit.toLowerCase() == "banana"){
        result.innerHTML = name.value + "," + " " + "You are optimistic!"
    }
       else if (fruit.toLowerCase() == "cherry"){
        result.innerHTML = name.value + "," + " " + "You are courageous!"
    }
         else if (fruit.toLowerCase() == "lemon"){
        result.innerHTML = name.value + "," + " " + "You are compassionate!"
    }
            else if (fruit.toLowerCase() == "strawberry"){
        result.innerHTML = name.value + "," + " " + "You are empathetic!"
    }
        else if (fruit.toLowerCase() !== "strawberry" || fruit.toLowerCase() !== "lemon" || fruit.toLowerCase() !=="orange" || fruit.toLowerCase() !== "apple" ||  fruit.toLowerCase() !== "cherry"||  fruit.toLowerCase() !== "banana"   ){
        result.innerHTML = "You need to choose one of the fruit!"
    }
    if (fruit== "" ||  name=="" ){
        result.innerHTML = "You forget to type in one of the boxes!"
    }
       
})