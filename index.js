const butonScroll = document.querySelector(".buton-scroll");
const articolAleu = document.querySelector(".articol-aleu");

butonScroll.addEventListener("mouseover", event =>  {
    event.target.style.backgroundColor = "rgb(1, 161, 1)";
    event.target.style.boxShadow = "0px 0px 20px white";
})
butonScroll.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "rgb(1, 129, 1)";
    event.target.style.boxShadow = "none";
})
butonScroll.addEventListener("click" , event => {
    articolAleu.scrollIntoView({behavior: "smooth"});
});