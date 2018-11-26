<?php

class Rectangle extends Shape { //on n'utilise pas l'héritage de rectangle mais de shape car rectangle ne peut avoir de rayon.

	public $width;
	public $height;



    public function __construct($x, $y,$width, $height, $fill, $opacity)
	{

        parent::__construct($x, $y, $fill, $opacity);

		$this->width = $width;
		$this->height = $height ;


	}


	public function setSize($width, $height) {
		$this->width = $width;
		$this->height = $height ;
	}



}








?>
