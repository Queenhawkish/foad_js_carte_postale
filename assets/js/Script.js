let title = document.getElementById("title")

var titre = document.getElementById("titlea")

title.addEventListener("input", function () {
    let input = document.getElementById("title").value
    titre.innerText = input
})

var texte = document.getElementById("txt")

let txt = document.getElementById("textarea")

texte.addEventListener("input" , function (){
    let input = texte.value
    txt.innerText = input
})

let color_texte = document.getElementById("colort")

function changecolortexte (){
    let input = color_texte.value
    txt.style.color = input
}

color_texte.addEventListener("input", changecolortexte)

let bgcolor = document.getElementById("bgcolor")

function changebgcolor () {
    let input = bgcolor.value
    titre.style.backgroundColor = input
}

bgcolor.addEventListener("input" , changebgcolor)

let font = document.getElementsByName("font")

font.forEach(element => {
    element.addEventListener("change", function () {
        titre.style.fontFamily = element.id
    })
})

// let p1 = document.getElementById("p1")

// p1.addEventListener("change", function () {
//     titre.style.fontFamily = "'Freehand', cursive";
// })

// let p2 = document.getElementById("p2")

// p2.addEventListener("change", function () {
//     titre.style.fontFamily = "'Dancing Script', cursive";
// })

// let p3 = document.getElementById("p3")

// p3.addEventListener("change", function () {
//     titre.style.fontFamily = "'Satisfy', cursive";
// })

var style = document.getElementById("style")

function changestyle() {
    switch (style.value) {
        case "default":
            titre.style.textDecoration = "none";
            titre.style.fontStyle = "normal";
            titre.style.fontWeight = "normal";
            break;
        case "italic":
            titre.style.textDecoration = "none";
            titre.style.fontStyle = "italic";
            titre.style.fontWeight = "normal";
            break;
        case "bold":
            titre.style.textDecoration = "none";
            titre.style.fontStyle = "normal";
            titre.style.fontWeight = "bold";
            break;
        case "underline":
            titre.style.textDecoration = "underline";
            titre.style.fontStyle = "normal";
            titre.style.fontWeight = "normal";
            break;
    }
}

style.addEventListener("change", changestyle)



let image

let img

let imgpick = document.getElementById("img")

let img1 = document.getElementById("but1")

let img2 = document.getElementById("but2")

let img3 = document.getElementById("but3")

// let image1 = document.getElementById("image1")

// let image2 = document.getElementById("image2")

// let image3 = document.getElementById("image3")

window.onload = function () {
    image = ["assets/img/montagne.webp", "assets/img/Mer.jpg", "assets/img/Campagne.jpg"];
    img = image[0];
}

function selectimage(number) {
    imgpick.style.backgroundImage = "url(" + image[number] + ") ";
    img = image[number];
}

img1.addEventListener("click", function () {
    selectimage(0)
})

img2.addEventListener("click", function () {
    selectimage(1)
})

img3.addEventListener("click", function () {
    selectimage(2)
})

// window.onload = function () {
//     image = [image1 , image2 , image3]
//     img = image[0]
// }

// function selectimage(number) {
//     imgpick.style.backgroundImage = "url(" + image[number] +") ";
//     img = image[number]
// }

// img1.addEventListener("click" , function() {
//     selectimage(0)
// })

// img2.addEventListener("click" , function() {
//     selectimage(1)
// })

// img3.addEventListener("click" , function() {
//     selectimage(2)
// })

let color = document.getElementById("color")

function changecolor() {
    titre.style.color = color.value;
}
color.addEventListener("input", changecolor)

let print = document.getElementById("print")

print.addEventListener("click" , function(){
    window.print()
})