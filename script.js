var one = document.querySelector(".one")
one.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=one.value;
})

var two = document.querySelector(".two")
two.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=two.value;
})

var three = document.querySelector(".three")
three.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=three.value;
})

var four = document.querySelector(".four")
four.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=four.value;
})

var five = document.querySelector(".five")
five.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=five.value;
})

var six = document.querySelector(".six")
six.addEventListener("click",()=>{
document.querySelector(".inputBox").value+=six.value;
})
var seven = document.querySelector(".seven")
seven.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=seven.value;
})
var eight = document.querySelector(".eight")
eight.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=eight.value;
})
var nine = document.querySelector(".nine")
nine.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=nine.value;
})
var dzero = document.querySelector(".dzero")
dzero.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=dzero.value;
})
var zero = document.querySelector(".zero")
zero.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=zero.value;
})
var point = document.querySelector(".point")
point.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=point.value;
})
var per = document.querySelector(".per")
per.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=per.value;
})
var plus = document.querySelector(".plus")
plus.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=plus.value;
})
var minus = document.querySelector(".minus")
minus.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=minus.value;
})
var div = document.querySelector(".div")
div.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=div.value;
})
var multi = document.querySelector(".multi")
multi.addEventListener("click",()=>{
    document.querySelector(".inputBox").value+=multi.value;
})

var clear = document.querySelector(".clear")
clear.addEventListener("click",()=>{
    document.querySelector(".inputBox").value=clear.value;
})
var del = document.querySelector(".del")
del.addEventListener("click",()=>{
    document.querySelector(".inputBox").value=del.value;
})

var equalBtn = document.querySelector(".equalBtn")
    equalBtn.addEventListener("click",()=>{
        let equalBtn = document.querySelector(".inputBox")
        document.querySelector(".inputBox").value=eval(equalBtn.value);

    })

    // document.querySelector(".inputBox").value=eval(equalBtn.value);
    // document.querySelector(".qwerty").value=eval(total.value);