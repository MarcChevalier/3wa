<?php


class Triangle extends Shape{

	public $points;

    public function __construct($pos1, $pos2, $pos3 , $fill, $opacity)
	{
    	parent::__construct('', '', $fill, $opacity);

    	$this->points = array($pos1, $pos2, $pos3);
    }// on peut le faire passer en tableau au lieu de le déclarer en 3 variables, les deux méthodes sont possibles.


}



?>
