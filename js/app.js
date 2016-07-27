/***** DRAGGABLE CLIP-PATH *****/

/*var viewFinder = document.querySelector('.clip-path');

viewFinder.addEventListener('mousedown', drag, true);
viewFinder.addEventListener('mouseup', drop, true);

function drag()
{
	viewFinder.addEventListener('mousemove', moveViewFinder, false);
}

function drop()
{
	viewFinder.addEventListener('mousemove', moveViewFinder, false);
}


function moveViewFinder(e)
{
	var div = document.querySelector('.clip-path');
	div.style.position = 'absolute';
	div.style.top = e.clientY + 'px';
  	div.style.left = e.clientX + 'px';
}*/

// myObject.addEventListener("mousedown", function(e){
//     mouseDownFunction(e); 

//     myObject.onmousemove = function(e) {
//         mouseMoveFunction(e);
//      }
// });

// myObject.addEventListener("mouseup", function(e){
//     myObject.onmousemove = null
// });

var clipPath = document.querySelector('.clip-path');

function drag(e)
{
	clipPath.onmousemove = drag(e);
}

clipPath.addEventListener('mousedown', drag);
//clipPath.removeEventListener('mouseup', drop);



