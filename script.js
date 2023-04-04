let button_input = document.querySelectorAll(".input-button");

equal_pressed = 0;

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let delete_last = document.getElementById("delete");

window.onload = () => {
    input.value="";
}


button_input.forEach(button => {
    button.addEventListener("click",() => {
        let value = button.value;
        document.getElementById("input").value += value;
});
});


clear.addEventListener("click",() => {
    input.value="";
});


delete_last.addEventListener("click",() => {
    input.value = input.value.substring(0, input.value.length -1);
});

equal.addEventListener("click",() => {
    try {
        input.value = eval(input.value);
    }
    catch (err) {
        window.alert("Invalid input");
    }
});







