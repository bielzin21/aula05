let div = document.querySelector(".index")
let p = document.createElement("p")
let li = document.createElement("li")

p.innerHTML = "Olá, mundo!"
li.innerHTML = "oi, mundo!"
div.appendChild(p)
div.appendChild(li)