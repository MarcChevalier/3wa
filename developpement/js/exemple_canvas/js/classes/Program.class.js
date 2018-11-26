'use strict'

var Program = function(IdDuDom) {
	  this.colorPalette = new ColorPalette();
	  this.pen          = new Pen();
    this.canvas       = new Slate(IdDuDom, this.pen);

	this.penColor = document.querySelectorAll('.pen-color');
    this.penSize = document.querySelectorAll('.pen-size');
	this.clearButton = document.getElementById('tool-clear-canvas');
	this.paletteButton = document.getElementById('tool-color-picker');

}

Program.prototype.onClickColorPicker = function()
{
    $('#color-palette').removeClass('hide');
};



Program.prototype.onClickPenSize = function(event)
{
	var div = event.currentTarget;
    var size = div.dataset.size;

    this.pen.setSize(size);

}

Program.prototype.onClickPenColor = function() {

    var div = event.currentTarget;
    var color = div.dataset.color;
    console.log(color);
    this.pen.setColor(color);

}

Program.prototype.clear = function()
{
    this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
}

Program.prototype.onPickColor = function() {
	var color =  this.colorPalette.getPickedColor();
	this.pen.setColorAsRgb(color.red, color.green, color.blue);
    $('#color-palette').addClass('hide');
}



Program.prototype.start = function()
{
	for(var i = 0; i < this.penColor.length; i++) {
		this.penColor[i].addEventListener('click', this.onClickPenColor.bind(this) );
	}
    //$('.pen-color').on('click', this.onClickPenColor.bind(this));

    for(var j = 0; j < this.penSize.length; j++) {
		this.penSize[j].addEventListener('click', this.onClickPenSize.bind(this) );
	}

    this.clearButton.addEventListener('click', this.clear.bind(this));
	this.paletteButton.addEventListener('click', this.onClickColorPicker.bind(this));

   	$(document).on('magical-slate:pick-color', this.onPickColor.bind(this));



}
