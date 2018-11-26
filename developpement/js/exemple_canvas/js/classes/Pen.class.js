'user strict'

var Pen = function()
{
    this.color = 'black';
    this.size  = 1;
};


Pen.prototype.configure = function(context)
{
	context.strokeStyle = this.color;
    context.lineWidth   = this.size;

}

Pen.prototype.setColor= function(color) {

	this.color = color;

}

Pen.prototype.setSize = function(size) {

	this.size = size;
}
Pen.prototype.setColorAsRgb = function(red, green, blue)
{
    this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};
