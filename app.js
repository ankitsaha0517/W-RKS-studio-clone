const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function loading(){
    let tl = gsap.timeline()
    tl.to("#loder #yellow1",{
        top:"-100%",
        delay:0.3,
        duration:0.7,
        ease: "power4.out",
    })
    tl.from("#yellow2",{
        top:"100%",
        delay:0.4,
        duration:0.7,
        ease: "power4.out",
    },"anim")
    tl.to("#loder h1",{
        color:"black",
        delay:0.3,
        duration:0.7,
    },"anim")
    tl.to("#loder",{
        display:"none",
        delay:0.2,
    },"anim")
}
loading()

var page2 = document.querySelector("#page2")

var elems = document.querySelectorAll(".elem")
elems.forEach(function(el){
    el.addEventListener("mouseenter",function(){
       var bg = el.getAttribute("data-img");
       page2.style.backgroundImage= `url(${bg})`;

    })
    el.addEventListener("mouseleave",function(){
       
        page2.style.backgroundImage= `url(" ")`;
        page2.style.backgroundColor= `black`;
 
     })
})

document.querySelector("#footer #white i,#footer #white p").addEventListener("click",function(){
    scroll.scrollTo(0)
})