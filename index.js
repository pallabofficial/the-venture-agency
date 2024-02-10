const cursor = document.querySelector("#cursor");
const page1 = document.querySelector("#page-1");


page1.addEventListener("mousemove", function(event){
    gsap.to(cursor, {
        top:event.y,
        left:event.x,
    })
})