<?php


class Time {

	  public $width;
    public $height;
    public $x;
		public $x;

    public function __construct($width, $height, $x, $x)
    {
       $this->width = $width;
       $this->height = $height;
       $this->x = $x;
			 $this->y = $y;
    }


	public function addSecond()
    {
        if($this->seconds < 59){
        	$this->seconds ++;
        }else {
        	$this->seconds = 0;
        	if($this->minutes < 59){
        		$this->minutes++;
        	} else {
        		$this->minutes = 0;
        		if($this->hours < 23){
        			$this->hours++;
        		} else {
        			$this->hours = 0;
        		}
        	}
        }
    }



    public function addMinute()
    {

        if($this->minutes < 59){
        	$this->minutes++;
        } else {
        	$this->minutes = 0;
        	if($this->hours < 23){
        		$this->hours++;
        	} else {
        		$this->hours = 0;
        	}
        }

    }


    public function addHour()
    {

        if($this->hours < 23){
        	$this->hours++;
        } else {
        	$this->hours = 0;
        }

    }

    public function display() {
        	echo '<p>'.$this->hours.' : '.$this->minutes.' : '.$this->seconds.'</p>';

        }

}






 ?>
