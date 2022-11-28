let img=document.querySelector("img")
let bttn1=document.querySelector(".button1")
let bttn2=document.querySelector(".button2")
bttn1.addEventListener("click",()=>{
    img.style.width="500px"
    img.style.height="500px"
    bttn1.style.display="none"
    bttn2.style.display="block"
})

bttn2.addEventListener("click",()=>{
    img.style.width="200px"
    img.style.height="200px"
    bttn2.style.display="none"
    bttn1.style.display="block"
})
