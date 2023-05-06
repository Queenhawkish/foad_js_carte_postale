let title = document.getElementById("title")

title.addEventListener("input" , function(){
    let input = document.getElementById("title").value

    let titlea = document.getElementById("titlea")

    titlea.innerText = input
})

let p1 = document.getElementById("p1")

p1.addEventListener("change" , function(){
    document.getElementById("titlea").style.fontFamily = "'Freehand', cursive";
})

let p2 = document.getElementById("p2")

p2.addEventListener("change" , function(){
    document.getElementById("titlea").style.fontFamily = "'Dancing Script', cursive";
})

let p3 = document.getElementById("p3")

p3.addEventListener("change" , function(){
    document.getElementById("titlea").style.fontFamily = "'Satisfy', cursive";
})

