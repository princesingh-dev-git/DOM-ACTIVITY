let btn=document.querySelector("button")
btn.innerText="click me to change colour";

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1")
    btn.innerText="click me to change colour again"
    
    let randomcolour=getRandom();
    h1.innerText=randomcolour;
    let div=document.querySelector("div")
    div.style.backgroundColor=randomcolour;

})
function getRandom(){
    let red=Math.floor(Math.random()*256)
    let green=Math.floor(Math.random()*256)
  let blue  = Math.floor(Math.random()*256)
  let colour=`rgb(${red}, ${green}, ${blue})`;
  return colour
}