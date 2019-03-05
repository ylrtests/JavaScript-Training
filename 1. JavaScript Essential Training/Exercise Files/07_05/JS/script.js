const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e,current) {
    e.preventDefault();

    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}

CTA.addEventListener('click', function(e){reveal(e,this)}, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);


//MI FORMA DE HACERLO
// ========================================
// sin necesidad de llamar función anónima, aunque el ejemplo es para mostrar como hacerlo
//
// function reveal(e) {
//     e.preventDefault();
//     // CTA.classList.toggle("hide");
//     CTA.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooooops!" : CTA.innerHTML = "Book Now!";
//     ALERT.classList.toggle("hide");
// }

// CTA.addEventListener('click', reveal, false);
// CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);