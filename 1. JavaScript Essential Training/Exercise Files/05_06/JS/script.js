
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

captionElement.append(altText);

//var captionText = document.createTextNode(altText);
//captionElement.appendChild(captionText);

console.log(captionElement);
FEATURED.append(captionElement);
THEIMAGE.setAttribute("alt","");