interact('.text')
	.draggable({
		// enable inertial throwing - bouciness feel
		inertia: true,
		// keep the element within the area of it's parent
		restrict: {
			restriction: "self",
			endOnly: true,
			elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		},
		// enable autoScroll
		autoScroll: true,

		// call this function on every dragmove event
		onmove: dragMoveListener,
	});

	function dragMoveListener (event) {
		var target = event.target,
				// keep the dragged position in the data-x/data-y attributes
				x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
				y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

		// translate the element
		target.style.webkitTransform =
		target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)';

		// update the posiion attributes
		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
	}


interact('.website').dropzone({
	// only accept elements matching this CSS selector
	accept: '.text',
	// Require a 75% element overlap for a drop to be possible
	overlap: 0.75,

	// listen for drop related events:

	ondropactivate: function (event) {
		// add active dropzone feedback
		event.target.classList.add('drop-active');
	},
	ondragenter: function (event) {
		var draggableElement = event.relatedTarget,
				dropzoneElement = event.target;

		// feedback the possibility of a drop
		dropzoneElement.classList.add('drop-target');
		draggableElement.classList.add('can-drop');
	},
	ondragleave: function (event) {
		// remove the drop feedback style
		event.target.classList.remove('drop-target');
		event.relatedTarget.classList.remove('can-drop');
	},
	ondrop: function (event) {
		event.relatedTarget.classList.remove('can-drop');

		//add text box to container
		var div = document.getElementById(event.target.id);

		var textarea = document.createElement("textarea");
		div.appendChild(textarea);
		nicEditors.allTextAreas();	
		event.relatedTarget.style.transform ='translate(0px, 0px)';

		event.relatedTarget.setAttribute('data-x', 0);
		event.relatedTarget.setAttribute('data-y', 0);
		$('textarea').keyup(function(e) {
			console.log("lmao");
			var code = e.keyCode || e.which;
			var removal = e.target;
			var div = document.getElementById(event.target.id);
			if(code == 13) {
				var text = document.createTextNode(removal.value);
				div.appendChild(text);
				console.log(removal);
				div.removeChild(removal);


			}
		});

	},
	ondropdeactivate: function (event) {
		// remove active dropzone feedback
		event.target.classList.remove('drop-active');
		event.target.classList.remove('drop-target');
	}
});

		
	