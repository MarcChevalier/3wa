<?php
class CommandModel {

	public function order() {

		$database = new Database();

		$sql = "SELECT Meal (
			Name,
			Photo,
			Description,
			QuantityInStock,
			SalePrice


		) FROM Meal";

		$values = [$name, $photo, $description, $quantityInStock, $salePrice $_SESSION['user']['Meal']];

		$database->executeSql($sql, $values);

		public function payed($orderId) {

    	$database = new Database();

    	$sql = 'UPDATE `Order`
				SET
					Status = "payed"
				WHERE Id = ?';

		$database->executeSql
        (
            $sql,
            [$orderId]
        );
    }
  }

	}






?>
