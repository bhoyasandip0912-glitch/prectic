// var neon = gsap.timeline()
    
// neon.to("#box",{
//     x:1200,
    
//     duration:2,
//     delay:0.5   ,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     borderTop:"10px solid red",  
//     borderRight:"10px solid red",    
//     borderLeft:"10px solid red",   
// })
var nox = document.getElementById("nox")
var box = document.getElementById("box")

function nunu(e){
    gsap.to("#box",{
        rotate:360,
        duration:2,
        // delay:0.5,
        repeat:-1,
        ease:"none"
        
    })
}
function tunu(e){
    gsap.from("#box",{
        opacity:0,
        duration:5
        
    })
}

nox.addEventListener("click",function(){
    nunu();
    // tunu();
    box.style.display="block"
})