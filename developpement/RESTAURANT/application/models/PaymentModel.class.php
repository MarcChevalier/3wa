<?php

class PaymentModel{

	public function validPayment() {

    	$database = new Database();
        $sql = 'SELECT (SalePrice) FROM Meal';

        return $database->query($sql);

    }



 ?>
