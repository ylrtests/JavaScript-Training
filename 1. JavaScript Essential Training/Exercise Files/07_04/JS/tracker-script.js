const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLETWO = document.querySelector('.circle-two');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
console.log("windowWidth: "+windowWidth);
console.log("windowHeight: "+windowHeight);

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    // console.log("e.clientX: "+e.clientX);
    // console.log("e.clientY: "+e.clientY);
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    //Set positions for second circle
    horizontalPosition = windowWidth - e.clientX - 126;
    verticalPosition= windowHeight - e.clientY - 126;

    CIRCLETWO.style.left = horizontalPosition + 'px';
    CIRCLETWO.style.top = verticalPosition + 'px';
}

function changeColorOnTouch(){
    // e.target.style.backgroundColor = "green";
    // e.target.style.borderColor = "green";

    this.style.backgroundColor = "green";
    this.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLETWO.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLETWO.addEventListener('mouseleave', function(){CIRCLETWO.removeAttribute("style");}, false);
