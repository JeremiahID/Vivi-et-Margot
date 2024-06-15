// Vanilla Js
// const Hamburger = document.querySelector('#hamburger');
// const CloseHamburger = document.querySelector('#close-hamburger');
// const Navigation = document.querySelector('#navigation');
// console.log("working")

// Hamburger.addEventListener('click', ()=>{
//     if(Navigation.style.display === "none"){
//         Navigation.style.display = "block";

//     }else{
//         Navigation.style.display = "none";
//     }
// })


// CloseHamburger.addEventListener('click', ()=>{
//     if(Navigation.style.display === "block"){
//         Navigation.style.display = "none";

//     }else{
//         Navigation.style.display = "none";
//     }
// })

// JQuery js
const Hamburger = $("#hamburger");
const CloseHamburger = $("#close-hamburger");
const Navigation = $("#navigation");


// adding event listerner to the hamburger icon
Hamburger.click(()=>{
    if(Navigation.css("display") === "none"){
        Navigation.css("display", Navigation.delay(200).fadeIn())
    } else{
        Navigation.css("display", "none")
    }
})

CloseHamburger.click(()=>{
    if(Navigation.css("display") === "block"){
        Navigation.css("display", Navigation.delay(400).fadeOut())
    } else{
        Navigation.css("display", "none")
    }
})