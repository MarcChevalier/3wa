<?php

class OrderModel
{

  public function find($orderId)
  {
    $database = new Database();

    $sql = 'SELECT
    *
    FROM `Order`
    WHERE Id = ?';

    // Récupération de la commande spécifiée.
    return $database->queryOne($sql, [ $orderId ]);
  }


  public function validate($userId, array $basketItems)
  {
    $database = new Database();

    $sql = 'INSERT INTO `Order`
    (
      User_Id,
      CreationTimestamp,
      TaxRate,
      Status
    ) VALUES (?, NOW(), 20.0, "not payed")';

    $orderId =  $database->executeSql( $sql , [ $userId ]);

    $sql2 = 'INSERT INTO OrderLine
    (
      Order_Id,
      Meal_Id,
      QuantityOrdered,
      PriceEach
    ) VALUES (?, ?, ?, ?)';

    $totalAmount = 0;

    foreach($basketItems as $basketItem)
    {
      $totalAmount += $basketItem->quantity * $basketItem->securePrice;

      $database->executeSql( $sql2, [ $orderId, $basketItem->mealId, $basketItem->quantity, $basketItem->securePrice ]);

    }

    $sql3 = 'UPDATE `Order`
    SET CompleteTimestamp = NOW(),
    TotalAmount       = ?,
    TaxAmount         = ? * TaxRate / 100
    WHERE Id = ?';

    $database->executeSql
    (
      $sql3, [ $totalAmount, $totalAmount, $orderId]
    );


    return $orderId;


  }

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
  public function deleteOrder($orderId) {
    $database = new Database();
    $sql = 'DELETE FROM
    `Order`
    WHERE Id = ?';

    $database->executeSql
    (
      $sql,
      [$orderId]
    );
  }



}
