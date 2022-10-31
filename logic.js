const tim = () =>{
   

}
const render = document.getElementById("render");
const trig = document.getElementById("txt");

trig.addEventListener("mouseover",()=>{
    render.style.visibility = "visible"
    // render.style.textTransform = "lowercase"
});

trig.addEventListener("mouseout",()=>{
    render.style.visibility = "hidden";

})


