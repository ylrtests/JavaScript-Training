/* el ^ dice que cualquier Anchor que tenga la siguiente parte dentro de su dirección */
var extLinks = document.querySelectorAll('a[href^="http"]');
console.log(extLinks);

for(var i = 0; i<extLinks.length ; i++){
    console.log(extLinks[i].attributes.href.nodeValue);
}