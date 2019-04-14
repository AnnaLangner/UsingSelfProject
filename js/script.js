'use strict'

function Button(text) {
	this.text = text || 'Hellow';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerHTML = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text);
		});
		document.body.appendChild(this.element);
	}
}

var btn1 = new Button('Hellow!');

btn1.create();